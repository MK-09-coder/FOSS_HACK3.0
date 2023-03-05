import React from "react";

function Pingen() {
  setTimeout(function() {
    window.location.replace('/Question');
  }, 5000);
  return (
    <><div className="flex items-center justify-center text-4xl text-slate-300 font-semibold mt-16 mb-20">Get ready to join......</div>
    
    <div className="flex items-center justify-center text-6xl text-slate-300 font-semibold  mb-20">Game pin : 7894561</div>
    
    
        <div>
            <img className="mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aXxRQt3tozPmH1s8PuXKL11Mc5DtngetWg&usqp=CAU" alt="" /></div>
            <div className="flex items-center justify-center text-4xl text-slate-300 font-semibold mt-20 mb-20">
        Waiting for players!!
        </div>
            
            </>
  );
}

export default Pingen;