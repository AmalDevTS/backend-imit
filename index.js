require('dotenv').config()


const express = require('express')

require('./DB/connection')


const router= require('./Routes/router')


const cors = require('cors')


const dServer = express()


dServer.use(cors())


dServer.use(express.json())

dServer.use(router)

dServer.use('/uploads',express.static('./uploads'))



const PORT = 5000;



dServer.listen(PORT,()=>{
    console.log("server is running in port:",PORT);
})

dServer.get('/',(req,res)=>{
    res.send("Social Media Server is running successfully")
})



