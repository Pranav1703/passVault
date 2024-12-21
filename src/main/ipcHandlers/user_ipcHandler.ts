import { ipcMain } from "electron"
import prisma from "../prismaClient"

export type User = {
    username: string
    password: string
}
export type Res = {
    msg: string | null
    err: string | null
}



export const registerUserIpcHandlers = ()=>{
    ipcMain.handle("signup",async(_event,userInfo:User):Promise<Res>=>{
        const {username,password} = userInfo
        console.log(username,password)
        try {
            const newUser = await prisma.user.create({
                data:{
                    username:username,
                    password:password
                }
            })
            if(newUser){
                return {
                    msg:"new user created",
                    err:null
                }
            }
            
        } catch (error) {
            console.log("DATABASE ERROR ERROR",error)
        }
        return {
            msg:null,
            err:"DATABASE ERROR ERROR."
        }
    })

    ipcMain.handle("login",async(_event,userInfo:User):Promise<Res>=>{
        const {username,password} = userInfo
        try {
            const retrievedUser = await prisma.user.findMany({
                where:{
                    username:username,
                },
            })
            if(!retrievedUser){
                return {
                    msg:null,
                    err:"no user found"
                }
            }else{
                if(retrievedUser[0].password === password){
                    return {
                        msg:"user found",
                        err:null
                    }
                }
            }

        } catch (error) {
            console.log("DATABASE ERROR ERROR",error)
        }
        return {
            msg:null,
            err:"DATABASE ERROR. Try again"
        }
    })
}