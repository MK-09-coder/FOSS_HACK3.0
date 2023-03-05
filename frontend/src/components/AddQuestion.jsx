import React from "react";
import "../index.css";
import {Link} from 'react-router-dom'
import Library from './Library';
const AddQuestion = () => {

  return (
    <div className="bg-slate-900">
      <nav class="bg-slate-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          
            <span class="self-center text-xl font-semibold whitespace-nowrap text-neutral-300">
              think\_tank
            </span>
         

          <div class="bg-slate-900 hidden w-full md:block md:w-auto" id="navbar-default ">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <input 
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter tank name"
                />
              </li>
              <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-24">
                Exit
              </button>
              <li>
                <Link to='/Library'><button class="bg-blue hover:bg-sky-500 text-white font-semibold py-2 px-4 border border-blue-400 rounded shadow w-24">                Save
              </button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="place-items-center">
        <input 
        type="text" 
        placeholder="Start typing your question"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6 text-center question-box"
        />
      </div>

      <div className="card card-side  ">
      <div className="bg-slate-900 flex flex-col items-center justify-evenly border-1 rounded-md mt-8 ">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-lg text-white bg-red-600 h-28 w-96 mr-8 flex justify-center items-center rounded-md" >
                    <input
                  class="shadow appearance-none bg-red-600  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Add option 1"
                />
                    </div>
                    <div className="font-bold text-lg text-white bg-green-300 h-28 w-96 flex justify-center items-center rounded-md">
                    <input
                  class="option-2 shadow appearance-none bg-green-300 text-white rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Add option 2"
                />
                    </div>
                </div>
                <div className="flex items-center justify evenly mt-4">
                    <div className="font-bold text-lg text-white bg-yellow-500 h-28 w-96 mr-8 flex justify-center items-center rounded-md">
                    <input
                  class="shadow appearance-none bg-yellow-500  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Add option 3"
                />
                    </div>
                    <div className="font-bold text-lg text-white bg-sky-600 h-28 w-96 flex justify-center items-center rounded-md">
                    <input
                  class="shadow appearance-none bg-sky-600  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Add option 4"
                />
                    </div>
                </div>
            </div>
</div>

<div className="delete-duplicate">
<button class="delete bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-24">
                Delete
              </button>
             
                <button class="duplicate bg-blue hover:bg-sky-500 text-white font-semibold py-2 px-4 border border-blue-400 rounded shadow w-24">
                Duplicate
              </button>
</div>
    </div>
  );
};

export default AddQuestion;
