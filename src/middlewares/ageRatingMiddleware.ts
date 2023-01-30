import { NextFunction, Request,Response } from "express";
import { ageRateSchema } from "../models/ageRateSchema";
import { AgeRating } from "../protocols/ageRating";

export async function ageRatingValidation(req:Request,res:Response,next:NextFunction){
    const ageRate = req.body as AgeRating
    const {error} = ageRateSchema.validate(ageRate, {abortEarly:false}) 
    
    if(error){
        res.status(400).send({
            message: error.message
        })
    }
    res.locals.ageRate = ageRate
    next();
    }