import { NextFunction, Request,Response } from "express";
import { trailersSchema } from "../models/trailersSchema";
import { Trailers } from "../protocols/trailers";


export async function trailersValidation(req:Request,res:Response,next:NextFunction){
    const trailer = req.body as Trailers
    const {error} = trailersSchema.validate(trailer, {abortEarly:false}) 
    
    if(error){
        res.status(400).send({
            message: error.message
        })
    }
    res.locals.trailer = trailer
    next();
    }