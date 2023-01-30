import { MovieId, Movies,Platform, Review } from "../protocols/movie.js";
import prisma from "../database/database.js";
import { Prisma } from "@prisma/client";



export async function listAllMovies(){      
    return prisma.movies.findMany()

}

export async function getPlatformTotal(plat: Platform){
    const count = await prisma.movies.count({
        where :plat
        })
    return count 
    }

export async function insertMovie(data:
    Prisma.moviesUncheckedCreateInput
){
    return prisma.movies.create({
       data, 
       select:{
        name: true,
        platform: true,
        genre: true,
        status: true,
        notes: true


       },
    })
    

}
export async function updateMovie(
    id: number,
    status: string,
    notes: string,
){
    return prisma.movies.update({
        where: {id},
        data:{
            status,
            notes
        }
    })
}

export async function deleteMovie(id:number){
    return prisma.movies.delete({
        where: {id},
    })
}