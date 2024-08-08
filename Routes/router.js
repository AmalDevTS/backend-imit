const usercontroller = require('../Controllers/userController');
const multerConfig = require('../Middlewares/multerMiddleware')


const express = require('express')

const router = new express.Router();




router.post('/user/upload',multerConfig.single('image'),usercontroller.post)

router.get('/user/project',usercontroller.getMainProject)








module.exports= router;