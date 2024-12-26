import { ipcMain } from "electron"
import { prisma } from "../prismaClient"

export type User = {
    username:   string
    password:   string
}
export type Res = {
    created?:   boolean
    found?:     boolean
    err?:       string
    userId?:    number
}

export const registerUserIpcHandlers = ()=>{
    ipcMain.handle("signup",async(_event,userInfo:User):Promise<Res | undefined>=>{
        try {
            const userExists = await prisma.user.findFirst({
                where:{
                    username:userInfo.username
                }
            })
            if(userExists){
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
                console.log("new user created:",newUser)
                return {
                    created: true
                }
            }else{
                return{
                    err:"couldn't create user"
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
            const retrievedUser = await prisma.user.findFirst({
                where:{
                    username:userInfo.username,
                },
            })
            if(!retrievedUser){
                return {
                    err:"invalid username."
                }
            }else{
                if(retrievedUser.password === userInfo.password){
                    return {
                        found:true,
                        userId: retrievedUser.id
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