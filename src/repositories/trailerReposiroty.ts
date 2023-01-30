import prisma from "../database/database"
import { Prisma } from "@prisma/client"

export async function listAllTrailers(){    
    return prisma.trailers.findMany()   
    
}

export async function postTrailers(data: Prisma.trailersUncheckedCreateInput){
    return prisma.trailers.create({
        data,
        select:{url:true}
    })
}

export async function deleteTrailers(id:number){
return prisma.trailers.delete({
    where:{id}
})
}