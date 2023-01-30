import { Router } from "express";
import { getTrailers } from "../controllers/trailersController";
import { trailersValidation } from "../middlewares/trailersValidationMiddleware";

const trailersRouter = Router();


trailersRouter.get("/trailers", trailersValidation, getTrailers )
trailersRouter.post("/trailers", trailersValidation, )
trailersRouter.delete("/trailers/:id", trailersValidation, )

export default trailersRouter