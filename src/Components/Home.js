import React from 'react'

const Home = () => {
  return (
    <div className='bgimg fixed w-screen '>
      <div className='flex justify-center items-center mt-[134px]'>
        <img src='logoo.png' alt='' className=''></img>
        
      </div>
      <div className='flex justify-center items-center'>
      <h1 className='text-style font-bold'>Foodmarket</h1>
   
      </div>
      <h1 className='text-paragraph mt-4 flex justify-center items-center'>Order delecious and quality food here!</h1>

      <div className='flex justify-center items-center mt-[224px]'>
        <button className='bg-[#574E6D] h-[16vw] w-[68vw] rounded-full button-style'>
        <span className='left-text' data-text='Sign'></span>
        <span className='right-text' data-text='In'></span>
        </button>

      </div>
    </div>
  )
}

export default Home
