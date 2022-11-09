const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(201).json({message: 'Welcome to Support Ticketing system' })
})
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))