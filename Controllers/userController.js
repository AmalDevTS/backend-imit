const users = require('../Models/userSchema')

exports.post =  async(req,res)=>{
    const image = req.file.filename;
    console.log(image);
    console.log("inside user controller: register function");
    const {description}= req.body;
    try{
        const existingUser = await users.findOne({description:description});
        console.log("Existing User");
        console.log(existingUser);
        if(existingUser){
            res.status(401).json('This submit form already exist')
        }
        else{
            const newUser= new users({
                description:description,
                image:image,
            
            })
            await newUser.save()
    res.status(200).json("registration request recieved")
        }

    }catch(err){
        res.status(401).json('Register request failed due to',err)
    }
    
}

exports.getMainProject = async(req,res)=>{
    try{
        const mainProject = await users.find();
        res.status(200).json(mainProject)

    }catch(err){
        res.status(401).json("Request failed due to",err)
    }
}