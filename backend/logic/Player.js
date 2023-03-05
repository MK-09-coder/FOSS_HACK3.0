const express = require("express");
const router = express.Router()
const pool = require("../db")
const CustomError = require("../utilis/customError.js")


router.post("/play/start",async(req,res,next)=>{
    const {pin} = req.body;
    const verify = await pool.query("SELECT game_id from GAME where (pin)=($1)",[pin])
    // console.log(verify.rows[0]);
    if (!verify.rows[0]){
        return next(new CustomError("wrong pin",401))
    }
    res.status(200).json(verify.rows[0])
})

router.post("/play/:id",async(req,res)=>{
try{
    const game_id =req.params.id
    // console.log(game_id)
    // const game_id ="e5ff8cc7-5899-4118-ad35-399f989e9e60"
const {nickname} = req.body;
const player=await pool.query("INSERT INTO PLAYERS (game_id,nickname) VALUES($1,$2) RETURNING * ",
[game_id,nickname])

res.json(player.rows[0])

}catch(error){
    console.error(error.message)
}
})

router.put("/play/:id",async(req,res)=>{
    const game_id = req.params.id;
    const {player_id,question_id,ans} = req.body
    // const player = await pool.query("SELECT * FROM PLAYERS WHERE game_id=($1), player_id=($2)",
    // [game_id,player_id]);
    const checkans = await pool.query("SELECT correctAnswer FROM  question WHERE question_id=($1)",
    [question_id]);
    
    
    let poi = await pool.query("SELECT points FROM players WHERE player_id=($1)",
    [player_id]);
    if(ans === checkans.rows[0].correctanswer){
        // const cho = points.rows[0] +1;
        const p =poi.rows[0].points +1
        await pool.query(`UPDATE players SET points=${p} WHERE player_id=($1)`,[player_id])
        
    }

  
    res.json("sucess")
})

router.get("/play/rank/:id",async(req,res)=>{
    const game_id = req.params.id
    const score = await pool.query("SELECT points,nickname FROM players WHERE game_id=($1)",[game_id]);

    console.log(score)
res.json(score.rows)
})

module.exports = router;