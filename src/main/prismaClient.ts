import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    datasources:{
        db: {
            url: import.meta.env.MAIN_VITE_DB
        }
    }
})