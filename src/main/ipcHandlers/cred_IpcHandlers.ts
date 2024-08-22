import { ipcMain } from "electron"
import { prisma } from "../prismaClient"
import {createCipheriv, createDecipheriv } from 'node:crypto';
import "dotenv/config"

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
const HexKey = process.env.ENCRYPTION_KEY as string
const HexIv = process.env.ENCRYPTION_IV as string

const key = Buffer.from(HexKey,"hex")
const iv = Buffer.from(HexIv,"hex")

const encryptPassword = (pass:string):string=>{

    const cipher = createCipheriv(algorithm, key, iv);
    let encryptedPassword = cipher.update(pass, 'utf8', 'hex');
    encryptedPassword += cipher.final('hex');
    return encryptedPassword
}

const decryptPassword = (encryptedPassword:string):string=>{
    
    const decipher = createDecipheriv(algorithm,key,iv)
    let decryptedPassword = decipher.update(encryptedPassword,"hex","utf8")
    decryptedPassword+=decipher.final("utf8")
    return decryptedPassword
}

export const registerCredIpcHandlers = ()=>{
    ipcMain.handle("create-cred",async(_event,collectionId:number,name:string,email:string,username:string,password:string)=>{
        
        const encryptedPass = encryptPassword(password)
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

    })

    ipcMain.handle("get-credentials",async(_event,collectionId:number):Promise<Credential[]>=>{
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