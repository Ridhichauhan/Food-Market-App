import React from 'react'
import { useNavigate } from 'react-router'

const Cart = () => {
  const nav = useNavigate();
  const navigateToPage = ()=>{
  nav("/AddCart")
  }
  return (
    <div className='bg-[#43405D] h-screen'> 
        <div className='flex justify-end'>
          <img className='mt-4 mr-4 h-6 w-6' src='like.png' alt='like'></img>
        </div>
        <div className='flex justify-center mt-20'>
        <img className='' src='eaat.png' alt=''></img>
        </div>
        <h1 className='text-white mt-8 font-bold text-3xl ml-12'>Veg Burger</h1>
        <h1 className='text-white text-sm ml-14 mt-2'>25 comments</h1>
        <h1 className='mt-12 text-white ml-14'>Explain about veggie Burger</h1>
        <p className='mt-4 ml-14 text-white'>Veg Burger is a traditional vietnamese sandwich that uses pork or beef prepared with Vegestables and special sauces</p>
        <div className='flex justify-between  mt-32 ml-14'>
        <div className='flex '>
        <h1 className='text-[#C3E7B6] text-sm'>Price :</h1><h1 className='text-gray-400'>$ 9.20</h1>
        </div>
        <button className='flex bg-[#C3E7B6] text-[#43405D] w-[38vw] h-14 rounded-full font-semibold mr-12 pl-5 pt-4'
        onClick={navigateToPage}
        >Add to cart
        <img className='ml-8' src='plus.png' alt=''></img>
        </button>
        </div>
    </div>
  )
}

export default Cart