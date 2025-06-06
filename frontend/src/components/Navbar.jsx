import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full flex justify-between items-center font-semibold px-4 py-2'>
      
      {/* Phần bên trái */}
      <div className='flex items-center gap-2'>
        <img onClick={()=>navigate(-1)}
          className='w-8 h-8 bg-black p-2 rounded-2xl cursor-pointer'
          src={assets.arrow_left}
          alt="Previous"
        />
        <img onClick={()=>navigate(1)}
          className='w-8 h-8 bg-black p-2 rounded-2xl cursor-pointer'
          src={assets.arrow_right}
          alt="Next"
        />
      </div>
      <div className='flex items-center gap-2 ml-auto'>
  <p className='bg-white text-black px-4 py-1 rounded-2xl'>A11</p>
  <p className='bg-black text-white px-4 py-1 rounded-2xl'>Music</p>
  <p className='bg-black text-white px-4 py-1 rounded-2xl'>Podcasts</p>
</div>


    
      <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
          Explore Premium
        </p>
        <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer text-white '>
          Install App
        </p>
        <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>
          D
        </p>
        

      </div>
    </div>
  );
};

export default Navbar;
