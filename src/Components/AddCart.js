import React from "react";

const AddCart = () => {
  const data = [
    {
      img: "logoo.png",
      title: "Veg Burger",
      price: "Price: $ 7,50",
      mrp:"$ 7,50",
      button: "- 2 +",
    },
    {
        img: "logoo.png",
        title: "Veg Burger",
        price: "Price: $ 7,50",
        mrp:"$ 7,50",
        button: "- 2 +",
      },
      {
        img: "pizza.png",
        title: "Veg Burger",
        price: "Price: $ 7,50",
        mrp:"$ 7,50",
        button: "- 2 +",
      },
  ];
  return (
    <div className="bg-[#43405D] h-screen w-screen fixed">
      <h1 className="text-white text-3xl p-4  font-bold">cart</h1>
       {data.map((item ,index)=>(
      <div key={index} className="grid grid-flow-row">
        <div className="flex">
          <div className="flex bg-[#dddd] h-[16vh] w-[68vw] ml-16 rounded-3xl mt-10">
            <img
              className="h-[128px] w-[128px] ml-[-24px] mt-2 "
              alt=""
              src={item.img}
            ></img>
            <h1 className="text-[#43405D] mt-8 font-bold text-base ">
              {item.title}
            </h1>
            <h1 className="mt-24 ml-[-80px] text-sm text-[#6B697E]">
              {item.price}
            </h1>
            <h1 className="mt-28 font-semibold  ml-[-75px] text-base text-[#6B697E]">
              {item.mrp}
            </h1>
            <button className="mt-24 font-semibold  ml-[75px] text-base h-8 rounded-full w-20 text-white bg-[#43405D]">
             {item.button}
            </button>
          </div>
          <div className="ml-6">
            <img className="h-10 w-10 mt-24 " alt="" src="trash.png"></img>
          </div>
        </div>
      </div>
      ))}
      <div className="h-[34vh] rounded-t-3xl bg-[#dddd] text-[#6B697E]">
      <div className="flex justify-between mt-16 ">
       <h1 className="p-8 font-bold text-lg">Veg Burger</h1>
       <h1 className="p-8 font-bold text-lg">$15</h1>
       </div>
       <div className="flex justify-between mt-[-22px]">
       <h1 className="ml-8 font-bold text-lg">Pizza</h1>
       <h1 className="mr-8 font-bold text-lg">$15</h1>
       </div>
       <div className="flex justify-between mt-[8px]">
       <h1 className="ml-8 font-bold text-lg">Noodles</h1>
       <h1 className="mr-8 font-bold text-lg">$15</h1>
       </div>
       <button className="bg-[#43405D] text-white  font-semibold w-[34vw] h-[5vh] ml-[156px] mt-10 rounded-2xl ">Buy Now</button>
      </div>
    </div>
  );
};

export default AddCart;
