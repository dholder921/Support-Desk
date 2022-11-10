const asyncHandler = require("express-async-handler");
const JWT = require("jsonwebtoken");
const User = require("../models/userModels");

const protect = asyncHandler(async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]
            //verify token
            const decoded = JWT.verify(token, process.env.JWT_SECRET)
            // Get User from token
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('No good')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('No good')
    }
})

module.exports = {protect}