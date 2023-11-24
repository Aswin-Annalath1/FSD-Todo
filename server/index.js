
const express = require('express') //It is to create server
const mongoose = require('mongoose') //It is to connect mongodb
const bodyParser = require('body-parser') //(It is to read data coming from body) used to process data sent through an HTTP request body
const cors = require('cors') //To allow cross origin(FE & BE) 
const allroutes = require('./routes/index.js') //Importing the routes fully

const app = express();

// Setting up cors(when we give requests (FE<=>BE) it should work without any problems)
app.use(cors({
    origin : "*",  //(we are allowing accept the request from FE if given)
    credentials : true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}))

//Here we are Initializing body parser..
app.use(bodyParser.json()) //bodyparser help to read json data coming from request body (Db or FE)
app.use(bodyParser.urlencoded({extended: true})) //It is middleware which allow bodyparser to pass command to next line..

//Here we are connecting project to database mongodb
mongoose.connect('mongodb+srv://aswinannalath:poison@cluster0.bszqfht.mongodb.net/', )   //{useNewUrlParser: true, useUnifiedTopology: true}
.then(() => {console.log("Connected to database")})
.catch((error) => {console.log("Error connecting to database",error)})

//Here we are Implementing all the routes..
app.use("/", allroutes)

//Starting the server
app.listen(5000, () => {console.log("Server is running on port 5000")})

