import joi from "joi";

export const ageRateSchema = joi.object({
    ageRate: joi.string().required()
})