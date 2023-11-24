//Here we are creating Db 
// Creatng schema for Home route...(In Db we create schema for data that we have to store)

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title:{
            type : String,
            required : true,
        },
        userID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",    //Here we refer to the Db of User created
            required: true,
        },
        status : {
            default : false,
            type : Boolean
        }

    },
    {
        timestamps : true
    })

const Todo = mongoose.model("Todo", todoSchema)  //Here code automatically call Db(Todo) and tell to do this job of storing data...//model is name or person in Db to whom code will communicate
module.exports = Todo