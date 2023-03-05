import React from 'react'
import {Correct,Wrong} from '.'
import {Link, useNavigate} from 'react-router-dom'
const Participant = () => {
  let  navigate=useNavigate()
const correctrouteChange=() =>{
  let path='/Correct'
  navigate(path)
}
const wrongrouteChange=() =>{
  let path='/Wrong'
  navigate(path)
}
  return (
    <div className=" min-h-screen bg-slate-900 justify-center">
        <div className='justify-center items-center'>
        <h2 className="choose justify-center text-4xl text-slate-300 font-semibold  mb-20">Choose the correct option</h2>
        </div>

        <div className="flex items-center justify-center ">
        <div className="red font-bold text-lg text-white bg-red-600 h-28 w-96 mr-8 flex justify-center items-center rounded-md transform transition duration-500 hover:scale-110" onClick={correctrouteChange}>
            <button className='font-bold text-lg text-white'>Option 1</button>
        </div>
        <div className="green font-bold text-lg text-white bg-green-300 h-28 w-96 flex justify-center items-center rounded-md transform transition duration-500 hover:scale-110" onClick={wrongrouteChange}>
        <button className='font-bold text-lg text-white'>Option 2</button>
        </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="yellow font-bold text-lg text-white bg-yellow-500 h-28 w-96 mr-8 flex justify-center items-center rounded-md transform transition duration-500 hover:scale-110" onClick={wrongrouteChange}>
        <button className='font-bold text-lg text-white'>Option 3</button>
        </div>
        <div className="blue font-bold text-lg text-white bg-sky-600 h-28 w-96 flex justify-center items-center rounded-md transform transition duration-500 hover:scale-110" onClick={wrongrouteChange}>
        <button className='font-bold text-lg text-white'>Option 4</button>
        </div>
        </div>
    </div>
  )
}

export default Participant