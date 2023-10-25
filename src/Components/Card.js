import React, { useState } from "react";
import { useNavigate } from "react-router";

const Card = () => {
  const data = [
    {
      title: "Cucumeber and shrink salad",
      price: "$",
      quantity: "3",
      img: "eat.png",
    },
    {
      title: "Cucumeber and shrink salad",
      price: "$",
      quantity: "3",
      img: "eat.png",
    },
    {
      title: "Cucumeber and shrink salad",
      price: "$",
      quantity: "3",
      img: "eat.png",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const nav = useNavigate();
  const navigateToPage = ()=>{
    nav("/cart")
  }
  return (
    <div className="bg-[#43405D] w-[100vw] h-[42vh]">
      <div className="">
        <img className=" ml-[400px] p-2" alt="" src="cartt.png" onClick={navigateToPage}></img>
        <input
          type="text"
          className="border-2 border-white bg-[#43405D] outline-none text-[#dddd]
          w-[64vw] h-[6vh] rounded-2xl pl-10 ml-20 mt-20"
          style={{
            backgroundImage: "url('/search.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10px center",
            backgroundSize: "22px 22px",
          }}
          placeholder="Search"
        ></input>
        <div className="flex space-x-4 text-[#dddd] ml-20 mt-12 font-semibold">
          <h1
            className={`cursor-pointer  rounded-full w-16 pl-2 h-6 ${
              activeTab === "All" ? "bg-[#dddd] text-[#43405D] flex justify-center w-16" : ""
            }`}
            onClick={() => setActiveTab("All")}
          >
            All
          </h1>
          <h1
            className={`cursor-pointer  rounded-full w-16 pl-2 h-6 ${
              activeTab === "Pizza" ? "bg-[#dddd] text-[#43405D]" : ""
            }`}
            onClick={() => setActiveTab("Pizza")}
          >
            Pizza
          </h1>
          <h1
            className={`cursor-pointer  rounded-full w-16 pl-2 h-6 ${
              activeTab === "Vegies" ? "bg-[#dddd] text-[#43405D]" : ""
            }`}
            onClick={() => setActiveTab("Vegies")}
          >
            Vegies
          </h1>
          <h1
            className={`cursor-pointer  rounded-full w-16 pl-2 h-6  ${
              activeTab === "Steakes" ? "bg-[#dddd] text-[#43405D]" : ""
            }`}
            onClick={() => setActiveTab("Steakes")}
          >
            Steakes
          </h1>
        </div>
      </div>
      <div className=" bg-[#bdb8b8] w-[100vw] h-[66vh] mt-14 rounded-t-[74px]">
        {data.map((item, index) => (
          <div key={index} className=" grid grid-flow-row">
            <div className="flex mt-12 bg-[#43405D] ml-8 mr-8 rounded-full w-[84vw] h-[14vh]">
              <img
                className="mt-[-50px] ml-[-20px]"
                alt=""
                src={item.img}
              ></img>
              <h1 className="text-[#dddd] ml-[-22px] mt-8 text-sm">
                {item.title}
              </h1>
              <img
                className="h-4 w-4 mt-9 ml-8"
                src="like.png"
                alt="like"
              ></img>
              <h1 className="text-[#D5FFC3] mt-20 ml-[-12px]">
                {item.quantity}
              </h1>
              <h1 className="flex text-[#D5FFC3] mt-20 ml-[-20px]">
                {item.price}{" "}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
