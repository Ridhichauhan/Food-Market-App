import React from "react";

const Main = ({title,price,quantity,img}) => {
 
  return (
    <div className="grid grid-cols-2  card mt-10 ml-10">
        <div className="relative bg-[#574E6D] h-[24vh] w-[34vw] rounded-[64px]">
          <img className="mt-[-40px]" alt="" src={img}></img>
          <h1 className="text-[#dddd] mt-[-44px]">{title}</h1>
          <h1 className="text-[#D5FFC3] ml-8 mt-2">{price}</h1>
          <div className="flex">
          <h1 className="text-[#D5FFC3] ml-8 mt-2 ">{quantity}</h1>
          <img className=" h-4 w-4 ml-20 mt-3" alt="" src="like.png"></img>
          </div>
        </div>
     
      </div>
  );
};

export default Main;
