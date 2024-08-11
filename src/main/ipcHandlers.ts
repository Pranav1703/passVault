import { ipcMain } from "electron"
import { prisma } from "./prismaClient"

export const registerIpcHandlers = ()=>{
    ipcMain.handle("test-db-insert",async(_event,n:number,s:string)=>{
        const create = await prisma.test.create({
            data:{
                number:n,
                stringData:s
            }
        })
        console.log("inserted :",create)
    })

    ipcMain.handle("test-db-showAll",async()=>{
        const allData = await prisma.test.findMany()
        console.log("retrieved data: ",allData)
    })
}