import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

const Login = () => {
  const {handleSubmit , register ,formState:{errors}} = useForm();
 const nav =  useNavigate();

   const onSubmit = (data) =>{
    console.log("data", data)
    if (data.email && data.password){
      nav("/food")
    }
    else{
      console.log("Not all fields are filled, not navigating.")
    }
   }
  return (
    <div className="bgimg fixed w-screen">
    <div className="flex justify-center items-center mt-[118px]">
      <img src="personn.png" alt="" className=""></img>
    </div>
    <div className="flex justify-center items-center">
        <h1 className="text-style font-bold">Welcome Back</h1>
      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col  ml-3">
        <div className="relative">
          <input
            className="flex w-[76vw] ml-12 mt-20 h-[6vh] outline-none border-4 border-white bg-transparent rounded-2xl pl-10 text-[#dddd]"
            style={{
              backgroundImage: "url('/email.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "12px center",
              backgroundSize: "22px 24px",
            }}
            {...register("email", { required: true })}
            type="text"
            placeholder='Email'
          ></input>
          {errors.email &&<span className='flex justify-end pr-14 text-red-500' style={{ height:'0.5rem'}}>Email is Required</span>}
        </div>
        <div  className="relative ">
        <input
          className="flex w-[76vw] ml-12 mt-8 h-[6vh] outline-none border-4 border-white bg-transparent rounded-2xl pl-10 text-[#dddd]"
          style={{
              backgroundImage: "url('/lock.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "12px center",
              backgroundSize: "22px 22px",   
            }}
            {...register ("password",{required:true})}
            type="text"
            placeholder='Password'
        ></input> 
        
         <img className="flex ml-[352px] h-[4vh] w-[9vw] absolute mt-[-48px]" src="eye.png" alt=""></img>
         {errors.password && <span className='flex justify-end text-red-500 pr-14' style={{ height: '0.5rem' }}>Password is Required</span>}
        </div>
      </div>
      <button type='submit' className="flex justify-center bg-[#DDDDDD] rounded-full ml-28 mt-16 w-[54vw] h-[5vh]">
        <h1 className="mt-2 font-bold text-md text-[#43405D]">Login</h1>
      </button>
    </form>
  </div>
  )
}

export default Login