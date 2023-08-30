import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Food = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <img className="h-6 w-6 ml-8 mt-6" src="menuu.png" alt=""></img>
        <img className="h-8 w-6 mr-8 mt-5" src="cart.png" alt=""></img>
      </div>
      <div className="flex bg-[#43405D] rounded-3xl h-[5vh] w-[80vw] mt-24 ml-8">
        <AiOutlineSearch className="ml-4 mt-3" color="white" size="1.6em" />
        <h1 className="text-white ml-2 text-md mt-2">search</h1>
        <input type="text" className="bg-[#43405D] ml-4"></input>
      </div>
       <div className="ml-2 mt-4">
        <img src="asian.png" alt=""></img>
     </div>
    </div>
  );
};

export default Food;
