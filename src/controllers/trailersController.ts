import { query, Request, Response } from "express";
import { url } from "inspector";
import { listAllTrailers,postTrailers,deleteTrailers } from "../repositories/trailerReposiroty";

export async function getTrailers(req:Request,res:Response){
const result = await listAllTrailers();
res.send(result).status(200)
}

export async function postTrailer(req:Request,res:Response){
 const trailer =  res.locals.trailer 
 const newTrailer = await postTrailers(trailer)
 res.send(`ageRate added ${newTrailer}`).status(201)
}

export async function deleteTrailer(req:Request,res:Response){
    const {id} = res.locals.ageRate 
    const ageRateDelete = await deleteTrailers(id)
    res.send(`ageRate delete ${ageRateDelete}`).status(201)
}