import React from "react";
import Main from "./Main";

const Food = () => {
  const data = [
    {
      title: "Cucumeber and shrink salad",
      price: "$",
      quantity: "3",
      img: "meal.png",
    },
    {
      title: "Vegestables and steak",
      price: "$",
      quantity: "3",
      img: "meal.png",
    },
    { title: "Veg Burger", price: "$", quantity: "3", img: "meal.png" },
    { title: "Veg Burger", price: "$", quantity: "3", img: "meal.png" },
  ];

  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <img className="h-6 w-6 ml-8 mt-6" src="menuu.png" alt=""></img>
        <img className="h-8 w-6 mr-8 mt-5" src="cart.png" alt=""></img>
      </div>
      <div className="flex bg-[#43405D] rounded-2xl h-[5.6vh] w-[74vw] mt-24 ml-14 ">
        <input
          type="text"
          className="bg-[#43405D] ml-8 outline-none pl-10 text-[#dddd]"
          style={{
            backgroundImage: "url('/search.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "1px center",
            backgroundSize: "22px 24px",
            marginLeft: "16px",
          }}
          placeholder="search"
        ></input>
      </div>
      <h1 className="flex ml-16 mt-4 font-bold text-2xl text-[#574E6D]">
        Asian Cucumber Salad
      </h1>
      <div className="grid grid-cols-2 card">
        {data.map((item, index) => (
          <Main
            key={index}
            img={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="flex bg-[#dddd] w-[96vw] h-[8vh] mt-16 ml-2 rounded-full">
        <img alt="" src="save.png" className="h-8 w-8 ml-14 mt-4"></img>
        <img alt="" src="heartt.png" className="h-7 w-8 ml-8 mt-5"></img>
        <img
          alt=""
          src="homee.png"
          className="h-14 w-14 ml-10 mt-[-16px]"
        ></img>
        <img alt="" src="carrt.png" className="h-8 w-8 ml-10 mt-5"></img>
        <img alt="" src="userr.png" className="h-8 w-8 ml-10 mt-5"></img>
      </div>
    </div>
  );
};

export default Food;
