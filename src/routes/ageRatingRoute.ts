import { Router } from "express";
import { deleteAgeRating, getAgeRating, postAgeRate } from "../controllers/ageRatingController";
import { ageRatingValidation } from "../middlewares/ageRatingMiddleware";

const ageRateRouter = Router();


ageRateRouter.get("/ageRate", ageRatingValidation, getAgeRating )
ageRateRouter.post("/ageRate", ageRatingValidation, postAgeRate)
ageRateRouter.delete("/ageRate/:id", ageRatingValidation, deleteAgeRating)

export default ageRateRouter