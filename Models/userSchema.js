const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }


}, { collection: 'Sserver' });

const users = mongoose.model("users",projectSchema)


module.exports = users;