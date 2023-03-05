import React from 'react'
import correct from "../images/correct.png"
import { useEffect } from 'react';
function Correct() {
setTimeout(function() {
  window.location.replace('/Profile');
}, 5000);
  return (
    <div className=" min-h-screen bg-slate-900 flex items-center justify-center">
      <div ><img className='wrong-img flex items-center justify-center w-64 h-64' src={correct}/>
      <h2 className='wrong-text flex items-center justify-center text-4xl text-slate-300 font-semibold  mb-20'>Correct</h2>
      <div className='w-full'>
      <h2 className=' flex items-center justify-center text-4xl text-slate-300 font-semibold  '>That's right! You're a genius!</h2>
      </div>
      </div>
    </div>
  )
}

export default Correct;