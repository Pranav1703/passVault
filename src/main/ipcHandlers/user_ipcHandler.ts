import { ipcMain } from "electron"
import prisma from "../prismaClient"

export type User = {
    username:   string
    password:   string
}
export type Res = {
    created?:   boolean
    found?:     boolean
    err?:       string
}

export const registerUserIpcHandlers = ()=>{
    ipcMain.handle("signup",async(_event,userInfo:User):Promise<Res | undefined>=>{
        try {
            const users = await prisma.user.findMany({
                where:{
                    username:userInfo.username
                }
            })
            if(users){
                return{
                    err:"user already exists"
                }
            }
            
            const newUser = await prisma.user.create({
                data:{
                    username:userInfo.username,
                    password:userInfo.password
                }
            })
            if(newUser){
                return {
                    created: true
                }
            }

            
        } catch (error) {
            console.log("DATABASE ERROR",error)
            return{
                err: "database error"
            }
        }
    })

    ipcMain.handle("login",async(_event,userInfo:User):Promise<Res | undefined>=>{
        
        try {
            const retrievedUser = await prisma.user.findMany({
                where:{
                    username:userInfo.username,
                },
            })
            if(!retrievedUser){
                return {
                    err:"invalid username."
                }
            }else{
                if(retrievedUser[0].password === userInfo.password){
                    return {
                        found:true
                    }
                }else{
                    return{
                        err:"password incorrect."
                    }
                }
            }

        }catch (error) {
            console.log("DATABASE ERROR",error)
            return{
                err: "database error"
            }
        }
    })
}