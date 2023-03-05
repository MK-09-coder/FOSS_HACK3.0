const express = require("express");
const app = express()
const cors = require("cors")
const pool = require("./db")
const morgan = require("morgan");


//middleware
app.use(cors());
app.use(morgan("tiny"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const User = require("./logic/User")
const Quiz = require("./logic/Quiz")
const Player = require("./logic/Player")

app.use("/user",User)
app.use("/creator",Quiz)
app.use("/player",Player)

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})