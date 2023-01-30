import prisma from "../database/database"
import { Prisma } from "@prisma/client"
import { AgeRating, AgeRatingId } from "../protocols/ageRating"

export async function listAgeRatings(){    
    return prisma.ageRating.findMany()   
    
}

export async function postAgeRating(data: Prisma.ageRatingUncheckedCreateInput){
    return prisma.ageRating.create({
        data,
        select:{
            age: true
        }
    })
}

export async function deleteAgeRating(id:number):Promise<AgeRatingId>{
return prisma.ageRating.delete({
    where:{id}
})
}