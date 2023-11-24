//Here we import routes created and will create a main route and export to main index.js file

const todoroutes = require('./todoroutes.js')
const userroutes = require('./userroutes.js')
const adminroutes = require('./adminroutes.js')
const  router = require('express').Router()  //Its needed here to create route


router.use("/todos", todoroutes)       //Here we create todos route
router.use("/users", userroutes)      //Here we create users route
router.use("/admin", adminroutes)      //Here we create admin route

module.exports = router

