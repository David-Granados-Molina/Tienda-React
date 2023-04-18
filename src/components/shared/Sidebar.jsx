import React from 'react';
import { RiHome7Line, RiUserLine, RiEqualizerLine, RiLoginBoxLine } from "react-icons/ri";
import { GiTShirt, GiArmoredPants, GiHoodie, GiHeartNecklace } from "react-icons/gi";


const Sidebar = () => {
  return (
    <div className='bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full flex flex-col justify-between'>
      <div>
        <ul className='pl-4'>

          {/* Logo */}
          <li>
            <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
          </li>

          {/* Home */}
          <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
            <a href="" className='bg-purple-600 p-4 rounded-xl text-white flex justify-center'>
              <RiHome7Line className='text-2xl' />
            </a>
          </li>

          {/* Shirts */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="" className='group-hover:bg-purple-600 p-4 rounded-xl text-[#00F9F9] flex justify-center group-hover:text-white transition-colors'>
              <GiTShirt className='text-2xl' />
            </a>
          </li>

          {/* Pants */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="" className='group-hover:bg-purple-600 p-4 rounded-xl text-[#00F9F9] flex justify-center group-hover:text-white transition-colors'>
              <GiArmoredPants className='text-2xl' />
            </a>
          </li>

          {/* Hoodies */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="" className='group-hover:bg-purple-600 p-4 rounded-xl text-[#00F9F9] flex justify-center group-hover:text-white transition-colors'>
              <GiHoodie className='text-2xl' />
            </a>
          </li>

          {/* Accessories */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="" className='group-hover:bg-purple-600 p-4 rounded-xl text-[#00F9F9] flex justify-center group-hover:text-white transition-colors'>
              <GiHeartNecklace className='text-2xl' />
            </a>
          </li>

        </ul>
      </div>
      <div>
        <ul className='pl-4'>
          {/* Login/Logout */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="" className='group-hover:bg-purple-600 p-4 rounded-xl text-[#00F9F9] flex justify-center group-hover:text-white transition-colors'>
              <RiLoginBoxLine className='text-2xl' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar