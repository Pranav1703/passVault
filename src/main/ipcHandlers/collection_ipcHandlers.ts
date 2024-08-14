import { ipcMain } from "electron"
import { prisma } from "../prismaClient"

export type collection = {
    id: number
    name: string
}

export const registerCollectionIpcHandlers = ()=>{
    // ipcMain.handle("test-db-insert",async(_event,n:number,s:string)=>{
    //     const create = await prisma.test.create({
    //         data:{
    //             number:n,
    //             stringData:s
    //         }
    //     })
    //     console.log("inserted :",create)
    // })

    // ipcMain.handle("test-db-showAll",async()=>{
    //     const allData = await prisma.test.findMany()
    //     console.log("retrieved data: ",allData)
    // })
    ipcMain.handle("create-collection",async(_event,collectionName:string)=>{
        try {
            const newCollection = await prisma.collection.create({
                data:{
                    name:collectionName
                }
             })
             console.log("collection created :",newCollection)
        } catch (error) {
            console.log("couldn't create new collection named",collectionName," \nerror :",error)
        }
    })

    ipcMain.handle("delete-collection",async(_event,deleteId)=>{
        const deleted = await prisma.collection.delete({
            where:{
                id: deleteId
            }
        })
        console.log("deleted :",deleted)
    })

    ipcMain.handle("get-collections",async():Promise<collection[]>=>{
        try {
            const allCollections:collection[] = await prisma.collection.findMany()
            console.log("--------------all collections--------------\n",allCollections)
            return allCollections
        } catch (error) {
            console.log("couldn't retrieve all collections. ,",error)
        }
        return []
    })
}