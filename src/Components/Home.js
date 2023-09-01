import React from "react";
import { useNavigate} from "react-router-dom";

const Home = () => {

  const nav = useNavigate();
  const navigateToPage = (shouldOpenRegister)=>{
    if (shouldOpenRegister){
    nav("/register");
  } else{
    nav("/login")
  }
  }

  return (
    <div className="bgimg fixed w-screen">
      <div className="flex justify-center items-center mt-[134px]">
        <img src="logoo.png" alt="" className=""></img>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-style font-bold">Foodmarket</h1>
      </div>
      <h1 className="text-paragraph mt-4 flex justify-center items-center">
        Order delecious and quality food here!
      </h1>
      <div className="flex justify-center items-center mt-[224px]">
        <button className="bg-[#574E6D] h-[16vw] w-[68vw] rounded-full button-style">
          <span className="text-[#DDDDDD] mr-12 font-semibold"
          onClick={()=>navigateToPage(false)}>Sign In</span>
          <span className="text-[#574E6D] ml-6 font-semibold"
          onClick={()=>navigateToPage(true)}
          >Register</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
