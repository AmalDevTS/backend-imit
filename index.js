//1) import dotenv

require('dotenv').config()

//2) import express

const express = require('express')

require('./DB/connection')

//import router

const router= require('./Routes/router')

//3) import cors

const cors = require('cors')

//4) create server

const dServer = express()

//5) use cors

dServer.use(cors())

//6) use middleware to convert json to jsobject

dServer.use(express.json())

dServer.use(router)

dServer.use('/uploads',express.static('./uploads'))


//7) Define port

const PORT = 5000;

//8) run the server

dServer.listen(PORT,()=>{
    console.log("server is running in port:",PORT);
})



