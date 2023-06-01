const express = require("express")
const app = express()
require("dotenv").config({path : "./config/.env"} )
const PORT = process.env.PORT
app.use(express.static(__dirname + "/home"))

app.listen(PORT , (error)=>{
    error ? console.log(error)
    : console.log( `server runing on port ${PORT}` )
})

