import joi from "joi";

export const trailersSchema = joi.object({
    url: joi.string().required()
})