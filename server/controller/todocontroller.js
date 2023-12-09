//Here we write logic to be done.. ( here we talk with the Database )

const Todo = require('../models/todo.js')  //Here we are getting Db and model through which we will commuicate and perform logic.

//Function to get all in  page
module.exports.gettodos = async(req,res) => {      //It is exported to router as soon as created
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const todos = await Todo.find({userID : userID}) //the url userid checking with Db data userid.
        res.json(todos)
    }
    catch(error){
        res.json(error)
    }
}
//Function to get a item in  page
module.exports.gettodo = async(req,res) => {     
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const todo = await Todo.findById(req.params.id) //We can Acess this id using useParams hook..(The name (id) is given according to Route path given (:id) in App.js )
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}
//Function to post in page
module.exports.posttodos = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const todo = await Todo.create({         //Calling model(Todo) & storing data to schema..
            title : req.body.title,      //This is place were body-parser works
            userID : userID          //In task giving that userid taken from url
        })
        res.json(todo);
    }
    catch(error){
        res.json(error)
    }
}
//Function to delete one item in page..
module.exports.deletetodos = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}
//Function to Update one item in page..
module.exports.updatetodo = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            title : req.body.title,
        })
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}
//Function to Update status of a item in page..
module.exports.updatetodostatus = async(req,res) => {
    try{
        const userID = req.params.userid    //Here we take userid from url and paste with task created..
        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            status : req.body.status,
        })
        res.json(todo)
    }
    catch(error){
        res.json(error)
    }
}



