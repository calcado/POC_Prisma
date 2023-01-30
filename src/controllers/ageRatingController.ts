import { RESET_CONTENT } from "http-status";
import { listAgeRatings, postAgeRating } from "../repositories/ageRatingRepostiries";
import { query, Request, Response } from "express";
import { AgeRatingId } from "../protocols/ageRating";
import { prisma } from "@prisma/client";

export async function getAgeRating(req:Request,res:Response){
    const result = await listAgeRatings();
    res.send(result).status(200)
}

export async function postAgeRate(req:Request,res:Response){
    const ageRate = res.locals.ageRate
    const newAgeRate = await postAgeRating(ageRate);
    res.send(`ageRate added ${newAgeRate}`).status(201)
}

export async function deleteAgeRating(req:Request,res:Response){
    
    const {id,ageRate} = res.locals.ageRate 
    const ageRateDelete = await deleteAgeRating(id,ageRate)
    res.send(`ageRate delete ${ageRateDelete}`)
}