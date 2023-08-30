import React from "react";

const Main = () => {
  return (
    <div className="bgimg fixed w-screen">
      <div className="flex justify-center items-center mt-[134px]">
        <img src="logoo.png" alt="" className=""></img>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-paragraph font-bold">Welocme to the online</h1>
      </div>
      <h1 className=" text-style mt-4 flex justify-center items-center">
       Foodmarket
      </h1>
      <div className="flex justify-center items-center mt-[224px]">
        <button className="bg-[#DDDD] h-[16vw] w-[68vw] rounded-full text-[#43405D] text-lg font-bold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Main;
