import { MovieId, Movies,Platform, Review } from "../protocols/movie.js";
import prisma from "../database/database.js";



export async function listAllMovies(){
    
    return prisma.movies.findMany()
    // return connection.query(`SELECT * FROM movies;`);
    
}

export async function getPlatformTotal(plat: Platform){
    return prisma.movies.findFirst({where : plat})
    // return connection.query(`SELECT COUNT(id), platform FROM movies WHERE platform=$1;`,[plat.platform]);
}

export async function insertMovie(
    name: string,
    platform: string,
    genre: string,
    status: string
){
    return prisma.movies.create({
       data: {
        name,
        platform,
        genre,
        status,
       },
    })
    // return connection.query(`INSERT INTO movies (name, platform, genre, status, notes) VALUES($1,$2,$3,$4);`,
    // [movie.name, movie.platform, movie.genre,movie.status, movie.notes ]);

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
    // return connection.query(`UPDATE movies SET status=$1 , notes =$2;`, [review.status,review.notes]);
}

export async function deleteMovie(id:string){
    return prisma.movies.delete({
        where: {id},
    })
    // return connection.query(`DELETE FROM movies WHERE id=$1;`[id])
}