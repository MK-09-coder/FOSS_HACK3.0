import React from "react";
import {Link} from 'react-router-dom'
function Firstpage() {
  return (
    <><div className="text-center text-4xl font-semibold whitespace-nowrap text-neutral-300 mt-24">
        Think/_tank
    </div>
    <div className="card card-side">
          <div className="bg-slate-900 flex flex-col items-center justify-evenly border-1 rounded-md mt-24">
              <div className="flex items-center justify-between h-5/6">
                  <div className="bg-blue-300 h-72 w-96 mr-8 flex justify-center items-center rounded-md">
                      <div className="m-16">
                          <div className="mt-8">
                              <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCzZCGJCBl7IauNnTG0U6ZO_h4aqnlbarKw&usqp=CAU" alt="" />
                          </div>
                          <div className="mt-8 ml-16">
                              <Link to='/creator'><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                  Create game
                              </button></Link>
                          </div>
                      </div>
                  </div>
                  <div className="bg-green-300 h-72 w-96 flex justify-center items-center rounded-md">
                      <div className="m-16">
                          <div className="mt-8">
                              <img className="h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLjEPazpLcBvwGGeNNMzR7btOU6N4b1tdVQ&usqp=CAU" alt="" />
                          </div>
                          <div className="mt-6 ml-16">
                              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                  Host Game
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div></>
  );
}

export default Firstpage;
