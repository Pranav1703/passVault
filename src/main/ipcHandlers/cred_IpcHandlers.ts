import { ipcMain } from "electron"
import { prisma } from "../prismaClient"

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

export const registerCredIpcHandlers = ()=>{
    ipcMain.handle("create-cred",async(_event,collectionId:number,name:string,email:string,username:string,password:string)=>{
        
        const cred = await prisma.credential.create({
            data:{
                name: name,
                email:email,
                username: username,
                password:password,
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
        if(!collection){return []}
        
        if(collection?.creds){
            console.log("credentials with collection Id - ",collectionId," : ",collection.creds)
            return collection.creds
        }
        return []
    })

    ipcMain.handle("edit-cred",async(_event,payload:EditPayload)=>{
        console.log("recieved payload from renderer: ",payload)
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