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

      <div className='flex justify-center items-center'>
        <button className='bg-[#574E6D] h-[14vw] w-[62vw] text-white rounded-full'>sign in</button>
      </div>
    </div>
  )
}

export default Home
