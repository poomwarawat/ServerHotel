const Joi = require('@hapi/joi');

const resgiterValidate = data =>{
    const user = Joi.object({
        name : Joi.string(),
        lastname : Joi.string(),
        birth : Joi.string(),
        email : Joi.string().min(6).email(),
        password : Joi.string().min(6),
        repassword : Joi.string().min(6)
    })
    return user.validate(data)
}

const loginValidate = data =>{
    const user = Joi.object({
        email : Joi.string().min(6),
        password : Joi.string().min(6)
    })
    return user.validate(data)
}

module.exports.resgiterValidate = resgiterValidate
module.exports.loginValidate = loginValidate