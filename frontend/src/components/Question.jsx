import React from 'react'
import  Timer from "./Timer"
import AnswerCount from "./AnswerCount"
import {Link} from 'react-router-dom'
function Question() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-cenetr justify-center">
        <div>
            <Link to='/Rankings'><button className="h-10 w-24 bg-sky-400 absolute top-10 right-10 text-xl text-white font-semibold rounded-md">Next</button></Link>
        </div>
        <div className="flex flex-col items-center justify-center">
           
            <h2 className="text-4xl text-slate-300 font-semibold flex justify-center mb-20">Who is dinesh ?</h2>
            <div className="flex items-center">
               <div className="absolute left-32"><Timer /></div> 
            <div className="flex flex-col items-center justify-evenly border-1 rounded-md mt-8 ">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-lg text-white bg-red-600 h-28 w-96 mr-8 flex justify-center items-center rounded-md" >Designer</div>
                    <div className="font-bold text-lg text-white bg-green-500 h-28 w-96 flex justify-center items-center rounded-md">Web developer</div>
                </div>
                <div className="flex items-center justify evenly mt-4">
                    <div className="font-bold text-lg text-white bg-yellow-600 h-28 w-96 mr-8 flex justify-center items-center rounded-md">Growth Hacker</div>
                    <div className="font-bold text-lg text-white bg-sky-600 h-28 w-96 flex justify-center items-center rounded-md">All the above</div>
                </div>
            </div>
            <div className="absolute right-32">
                <AnswerCount />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Question