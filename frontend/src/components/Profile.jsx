import React from 'react'
import avatar from "../dev_data/avatar.png"

const Profile = () => {
  setTimeout(function() {
    window.location.replace('/Participant');
  }, 5000);
  return (
    <div  className=" min-h-screen bg-slate-900 justify-center">
      <div className='profile-pic flex items-center  justify-center transform transition duration-500 hover:scale-110'>
                <img src={avatar} alt="avatar" className="w-32 h-32 rounded-md border-zinc-200" />
                </div>
        <h2 className='hello flex items-center justify-center text-4xl text-slate-300 font-semibold  mb-20'>Hey, User!</h2>
        <h3 className='hello flex items-center justify-center text-2xl text-slate-300 font-semibold  mb-20'>Your score: 6880</h3>
        <div className="flex items-center justify-center ">
        <div className="red font-bold text-md text-white bg-slate-300 h-16 w-32 mr-8 flex justify-center items-center rounded-md transform transition duration-500 hover:scale-110" >
            <p className='font-bold text-md text-black'>Created: 0</p>
           
            
        </div>
        <div className="green font-bold text-md text-white bg-slate-300 h-16 w-32 flex justify-center items-center rounded-md transform transition duration-500 hover:scale-110">
        <div className='font-bold text-md text-black'>Hosted: 0</div>
        </div>
        </div>
      </div>
  )
}

export default Profile
