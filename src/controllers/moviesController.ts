import { query, Request, Response } from "express";
import { string } from "joi";
import { MovieId, Movies, Platform, Review } from "../protocols/movie.js";
import { listAllMovies, getPlatformTotal,insertMovie,updateMovie,deleteMovie } from "../repositories/moviesRepositories.js";

export async function getMovies(req:Request,res:Response){
    const result = await listAllMovies();
    return res.send(result).status(200)

}
export async function getPlatform(req:Request,res:Response){
    const searchPlatform = res.locals.platform
    const platform = await getPlatformTotal(searchPlatform);
    return res.send(platform).status(200)
}

export async function postMovies(req:Request,res:Response){
    const newMovie = res.locals.movie as Movies
    const result = await insertMovie(newMovie);
    return res.send(`Movie added ${result}`).status(201)

}
export async function updateMovies(req:Request,res:Response){
    const review = res.locals.review as Review
    const result = await updateMovie(review);
    return res.send(`Movie updated ${result}`).status(202)

}

export async function deleteMovies(id:number,req:Request,res:Response){
    const {id} = req.params
    const result = await deleteMovie(id);
    return res.send(`Movie deleted ${result}`).status(204)

}