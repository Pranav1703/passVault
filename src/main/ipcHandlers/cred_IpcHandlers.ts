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

    ipcMain.handle("get-credentials",async(_event,collectionId:number):Promise<Credential[] | null>=>{
        const collection = await prisma.collection.findUnique({
            where:{
                id:collectionId
            },
            include: {
                creds: true
            }
        })
        if(!collection){return null}
        
        if(collection?.creds){
            console.log("credentials with collection Id - ",collectionId," : ",collection.creds)
            return collection.creds
        }
        return null
    })

    ipcMain.handle("delete-cred",async()=>{
        
    })
}