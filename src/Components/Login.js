import React from 'react'

const Login = () => {
  return (
    <div className="bgimg fixed w-screen">
    <div className="flex justify-center items-center mt-[118px]">
      <img src="personn.png" alt="" className=""></img>
    </div>
    <div className="flex justify-center items-center">
        <h1 className="text-style font-bold">Welcome Back</h1>
      </div>
    <form>
      <div className="flex flex-col">
        <div className="relative ">
          <input
            type="text"
            className="flex w-[76vw] ml-12 mt-20 h-[6vh] outline-none border-4 border-white bg-transparent rounded-2xl"
            style={{
              backgroundImage: "url('/email.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "12px center",
              backgroundSize: "22px 24px",
            }}
          ></input>
          <h1 className="absolute mt-[-42px] ml-[102px] text-white text-lg ">Email</h1>
        </div>
        <div  className="relative ">
        <input
          type="text"
          className="flex w-[76vw] ml-12 mt-8 h-[6vh] outline-none border-4 border-white bg-transparent rounded-2xl"
          style={{
              backgroundImage: "url('/lock.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "12px center",
              backgroundSize: "22px 22px",   
            }}
        ></input>
         <h1 className="absolute mt-[-42px] ml-[100px] text-white text-lg ">Password</h1>
         <img className="flex ml-[320px] h-[4vh] w-[10vw] absolute mt-[-48px]" src="eye.png" alt=""></img>
        </div>
      </div>
      <button className="flex justify-center bg-[#DDDDDD] rounded-full ml-24 mt-16 w-[54vw] h-[5vh] ">
        <h1 className="mt-2 font-bold text-md text-[#43405D]">Register</h1>
      </button>
    </form>
  </div>
  )
}

export default Login