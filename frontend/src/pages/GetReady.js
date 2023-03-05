import React from 'react'
import { Participant } from '../components';
import load from "../images/load.png"
function GetReady() {
  setTimeout(function() {
    window.location.replace('/Participant');
  }, 5000);
  return (
    <div className='text-center text-4xl font-semibold whitespace-nowrap text-neutral-300 mt-24'> Game will be starting soon:
    <img className='h-32 mt-32 mx-auto' src={load}/>
    </div>
  )
}
export default GetReady