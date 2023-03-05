import React from 'react'
import {useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'
function Login() {
  function handleLogin(username, password) {
    axios.post('https://localhost:4000/User/login', { username, password })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  }
  const [inputs,setInputs]=useState({});
  const [login, setLogin] = useState(true);

  const navigate=useNavigate();
  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }


  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs)
    

  }

    const handleSignUp =()=>{
      setLogin(false)
   
      
    }


  return (
    <div className="h-screen bg-slate-900 flex flex-col items-center justify-center">
      <div className=" border-2 border-slate-300 rounded-lg w-80 h-72 flex flex-col items-center justify-evenly">
     
        {login ? 
        <>
          <div className="flex justify-evenly items-center w-64">
       <button  className="bg-slate-600 text-2xl  text-slate-300">Login</button>
       <button onClick={handleSignUp} className="text-2xl text-slate-300">SignUp</button>
       </div>
        <form onSubmit={handleSubmit} className="mt-4 h-44 w-72 flex flex-col justify-evenly items-center font-medium">
        <input
        className="rounded-md w-72 h-12 pl-6"
        type="email" 
        name="email"
        value={inputs.email || ''}
        onChange={handleChange}
        placeholder="email"/>
       <input
       className="rounded-md w-72 h-12 pl-6"
       type="password"
       name="password"
       value={inputs.password || ''}
       onChange={handleChange}
       placeholder="password" />
       <Link to='/Firstpage'><input
       type="submit" 
       placeholder="continue"
       className="rounded-md w-72 h-12 bg-green-500 text-slate-100 font-semibold"/></Link>
      </form>
      <Link to="/forgotPassword" className="text-slate-300">Forgot Password ?</Link> </>
      :
      <>
        <div className="flex justify-evenly items-center w-64">
       <button onClick={handleLogin} className="text-2xl text-slate-300">Login</button>
       <button  className="bg-slate-600 text-2xl text-slate-300">SignUp</button>
       </div>
      <form onSubmit={handleSubmit} className="mt-4 h-52 w-72 flex flex-col justify-evenly items-center font-medium">
        <input
        className="rounded-md w-72 h-12 pl-6"
        type="email" 
        name="email"
        value={inputs.email || ''}
        onChange={handleChange}
        placeholder="email"/>
       <input
       className="rounded-md w-72 h-12 pl-6"
       type="password"
       name="password"
       value={inputs.password || ''}
       onChange={handleChange}
       placeholder="password" />
       <input
       className="rounded-md w-72 h-12 pl-6"
       type="password"
       name="password"
       value={inputs.password || ''}
       onChange={handleChange}
       placeholder="confirm password" />
       <input
       type="submit" 
       placeholder="continue"
       className="rounded-md w-72 h-12 bg-green-500 text-slate-100 font-semibold"/>
      </form>
      </>}
      </div>
    </div>
  )
}

export default Login



