import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import avatar from "../dev_data/avatar.png"
import {motion} from "framer-motion"
import { useState } from 'react';
import { GameContext } from '../context/GameContext';
function Instructions() {
  const data = useContext(GameContext)
  // const [nickname,setNickname] =useState('')
  //   const [rotate,setRotate] = useState(false);
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            
            <div className="flex flex-col items-center justify-center">
              <div className='transform transition duration-500 hover:scale-110'>
                <img src={avatar} alt="avatar" className="w-32 h-32 rounded-md border-zinc-200" />
                </div>
                <p className="text-xl font-semibold text-slate-300 mt-2">{data.nickname}</p>
            </div>
            <h2 className="text-md font-medium text-slate-300 mt-2 max-w-md">
                You're in, see your {data.nickname} on the screen</h2>

                <h2 className="text-md font-medium text-slate-300 mt-2 max-w-md">
                Press start button to start the game!</h2>
                {/* <Link to="/GetReady">
                  <button type="button" class="start-button text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-32">Start</button>
                  </Link> */}
           
        </div>
    </div>
  )
}

export default Instructions