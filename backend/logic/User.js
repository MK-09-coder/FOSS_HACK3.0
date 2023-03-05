const express = require("express");
const router = express.Router()
const pool = require("../db")

router.post("/signup",async(req,res)=>{
    try{
        const {user_name,user_email,user_password} = req.body;
        const user= await  pool.query("INSERT INTO USERS (user_name ,user_email,user_password) VALUES($1,$2,$3) RETURNING *",
        [user_name,user_email,user_password]);

        res.json(user.rows[0])

    }catch(error){
        console.error(error.message)
    }
});

router.post("/login",async(req,res)=>{
    try{
        const {user_email,user_password} = req.body;
        const isUser = await pool.query("SELECT * FROM USERS WHERE user_email=$1",[user_email])
    res.json(isUser.rows[0])
    }catch(error){
        console.error(error.message)
    }
})

module.exports = router