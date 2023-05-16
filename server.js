const express = require('express')
const app = express()

const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000 //pull PORT from dotenv

app.use('/api/contacts', require("./routes/contactRoutes")) //middleware, start of url followed by routes in contactRoutes

app.listen(port, () =>{
    console.log(`server running on ${port}`)
})