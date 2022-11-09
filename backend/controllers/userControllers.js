const asyncHandler = require('express-async-handler')
/*
@desc Register a new user
@route /api/users
@access Public
*/
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

//validation
if(!name || !email || !password){
   res.status(400)
   throw new Error('Error on RegisterUser')
   
}
    res.send('Register Route')
})

const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser
}