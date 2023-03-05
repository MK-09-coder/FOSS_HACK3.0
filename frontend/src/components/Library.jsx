import React from "react";
import {Link} from 'react-router-dom'
const Library = () => {
  return (
    <>
      <div className="bg-slate-900 flex  justify-center">
        <h2 className="choose justify-center text-4xl text-slate-300 font-semibold  mb-20">
          My folders
        </h2>
      </div>
      <div className="card flex justify-center  w-1/2  bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-64">
          <img
            className="object-cover object-center w-full h-full"
            src=""
            alt="Card Image"
          />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
           tank title
          </h2>
          <Link to='/Pingen'><button class="start bg-blue hover:bg-sky-500 text-black font-semibold py-2 px-4 border border-blue-400 rounded shadow w-24">
                Start
              </button></Link>
        </div>
      </div>

      <div className="card flex justify-center  w-1/2  bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-64">
          <img
            className="object-cover object-center w-full h-full"
            src=""
            alt="Card Image"
          />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            tank title
          </h2>
          
          <Link to='/Pingen'><button class="start bg-blue hover:bg-sky-500 text-black font-semibold py-2 px-4 border border-blue-400 rounded shadow w-24">
                Start
              </button></Link>
        </div>
      </div>

      <div className="card flex justify-center  w-1/2  bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-64">
          <img
            className="object-cover object-center w-full h-full"
            src=""
            alt="Card Image"
          />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            tank title
          </h2>
          <Link to='/Pingen'><button class="start bg-blue hover:bg-sky-500 text-black font-semibold py-2 px-4 border border-blue-400 rounded shadow w-24">
                Start
              </button></Link>
        </div>
      </div>
      
    </>
  );
};

export default Library;
