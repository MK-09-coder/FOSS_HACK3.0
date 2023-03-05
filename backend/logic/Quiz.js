const express = require("express");
const router = express.Router()
const pool = require("../db")
const {v4:uuidv4} = require("uuid")

router.post("/create",async (req,res)=>{
    const {quiz_name} = req.body
const game = await pool.query("INSERT INTO QUIZ (quiz_name) VALUES($1) RETURNING *",[quiz_name])

res.json(game.rows[0])
})

router.post("/addQuestion",async(req,res)=>{
    const {question,answers,correctAnswer,quiz_id} = req.body
    const quest = await pool.query("INSERT INTO QUESTION (question,answers,correctAnswer,quiz_id) VALUES($1,$2,$3,$4) RETURNING *",
    [question,answers,correctAnswer,quiz_id])

    res.json(quest.rows[0])
})

router.post("/game",async(req,res)=>{
    const game_id = uuidv4();
    const pin = Math.floor(Math.random()*(10001-1001)) + 1001;
    const {quiz_id} = req.body
    const game = await pool.query("INSERT INTO GAME (game_id,pin,quiz_id) VALUES($1,$2,$3) RETURNING *",
    [game_id,pin,quiz_id])

    res.json(game.rows[0])

})


module.exports  = router;