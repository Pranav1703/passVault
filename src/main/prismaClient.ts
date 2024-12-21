import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()
export const prisma = new PrismaClient({
    datasources:{
        db: {
            url: import.meta.env.MAIN_VITE_LOCAL_DB
        }
    }
})

export default prisma



