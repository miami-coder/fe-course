import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        "string.pattern.base":"Only chars allowed & this must be at least 4 characters.",
    }),

    password: Joi.string().min(3).max(6).required().messages({
        "string.min":"Password can be at least 3 chars",
        "string.max":"Password can't be at least 6 chars",
    }),
    age: Joi.number().min(1).max(117).required().messages({
        "number.min":"Min age is 1",
        "number.max":"Max age is 117",
    }),
})

export default userValidator;