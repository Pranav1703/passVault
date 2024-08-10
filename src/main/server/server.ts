import express from "express"

const app = express()

export const StartServer = ()=>{
    app.use(express.json())

    app.get("/",(req,res)=>{
        
    })

    app.listen("3000",()=>{
        console.log("Listening on port:3000")
    })
}