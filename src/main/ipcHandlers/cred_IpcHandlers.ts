import { ipcMain } from "electron"
import { prisma } from "../prismaClient"
import {createCipheriv, createDecipheriv } from 'node:crypto';
import "dotenv/config"
import { ENCRYPTION_KEY,ENCRYPTION_Iv } from "../keys";

type Credential = {
    id: number
    name: string
    email: string
    username: string
    password: string
    collectionId: number
}

export type EditPayload = {
    credId:number
    name?:string
    username?:string
    email?:string
    password?:string
}

const algorithm = 'aes-256-cbc';
// const HexKey = process.env.ENCRYPTION_KEY as string
// const HexIv = process.env.ENCRYPTION_IV as string

// if (!HexKey || !HexIv) {
//     throw new Error("ENCRYPTION_KEY or ENCRYPTION_IV is not set");
// }

const key = Buffer.from(ENCRYPTION_KEY,"hex")
const iv = Buffer.from(ENCRYPTION_Iv,"hex")

const encryptPassword = (pass:string):string=>{

    try {
        const cipher = createCipheriv(algorithm, key, iv);
        let encryptedPassword = cipher.update(pass, 'utf8', 'hex');
        encryptedPassword += cipher.final('hex');
        return encryptedPassword
    } catch (error) {
        console.log(error)
    }
    return ""
}

const decryptPassword = (encryptedPassword:string):string=>{

    try {
        const decipher = createDecipheriv(algorithm,key,iv)
        let decryptedPassword = decipher.update(encryptedPassword,"hex","utf8")
        decryptedPassword+=decipher.final("utf8")
        return decryptedPassword
    } catch (error) {
        console.log(error)
    }
    return ""
}

export const registerCredIpcHandlers = ()=>{
    ipcMain.handle("create-cred",async(_event,collectionId:number,name:string,email:string,username:string,password:string)=>{
        
        const encryptedPass = encryptPassword(password)
        try {
            const cred = await prisma.credential.create({
                data:{
                    name: name,
                    email:email,
                    username: username,
                    password: encryptedPass,
                    collectionId: collectionId
                }
            })
    
            console.log("created record: ",cred)
        } catch (error) {
            console.log(error)
        }

    })

    ipcMain.handle("get-credentials",async(_event,collectionId:number):Promise<Credential[]>=>{

        try {
            const collection = await prisma.collection.findUnique({
                where:{
                    id:collectionId
                },
                include: {
                    creds: true
                }
                
            })

            if(collection?.creds){

                for(const cred of collection.creds){
                    const decryptedPass = decryptPassword(cred.password)
                    cred.password = decryptedPass
                }

                return collection.creds
            }
        } catch (error) {
            console.log(error)
        }

        return []
    })

    ipcMain.handle("edit-cred",async(_event,payload:EditPayload)=>{

        const encryptedPass = encryptPassword(payload.password!)
        payload.password = encryptedPass
        try {
            const editedRecord = await prisma.credential.update({
                where:{
                    id:payload.credId
                },
                data: {
                    name:  payload.name,
                    email: payload.email,
                    username: payload.username,
                    password: payload.password
                },
            })
            console.log("edited record: ",editedRecord)
        } catch (error) {
            console.log(error)
        }
        
    })

    ipcMain.handle("delete-cred",async(_event,credId:number)=>{
        const deletedCred = await prisma.credential.delete({
            where:{
                id:credId
            }
        })

        console.log("delete credential: ",deletedCred)
    })

}