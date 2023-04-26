import React from 'react';

// Icons
import { RiHome7Line, RiLoginBoxLine } from "react-icons/ri";
import { GiTShirt, GiArmoredPants, GiHoodie, GiHeartNecklace } from "react-icons/gi";




const Sidebar = (props) => {

  const { showMenu } = props;

  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>

      <div>
        <ul className='pl-4'>

          {/* Last Releases */}
          <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
            <a href="/" className='bg-[#8739F9] p-4 rounded-xl text-[#F2F5F5] flex justify-center'>
              <RiHome7Line className='text-2xl' />
            </a>
          </li>

          {/* Tees */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="/Tees" className='group-hover:bg-[#8739F9] p-4 rounded-xl text-[#37B9F1] flex justify-center group-hover:text-[#F2F5F5] transition-colors'>
              <GiTShirt className='text-2xl' />
            </a>
          </li>




          {/* Pants */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="/Pants" className='group-hover:bg-[#8739F9] p-4 rounded-xl text-[#37B9F1] flex justify-center group-hover:text-[#F2F5F5] transition-colors'>
              <GiArmoredPants className='text-2xl' />
            </a>
          </li>

          {/* Hoodies */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="/Hoodies" className='group-hover:bg-[#8739F9] p-4 rounded-xl text-[#37B9F1] flex justify-center group-hover:text-[#F2F5F5] transition-colors'>
              <GiHoodie className='text-2xl' />
            </a>
          </li>

          {/* Accessories */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="/Accessories" className='group-hover:bg-[#8739F9] p-4 rounded-xl text-[#37B9F1] flex justify-center group-hover:text-[#F2F5F5] transition-colors'>
              <GiHeartNecklace className='text-2xl' />
            </a>
          </li>

        </ul>
      </div>
      <div>
        <ul className='pl-4'>
          {/* Login/Logout */}
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a href="" className='group-hover:bg-[#8739F9] p-4 rounded-xl text-[#37B9F1] flex justify-center group-hover:text-[#F2F5F5] transition-colors'>
              <RiLoginBoxLine className='text-2xl' />
            </a>
          </li>
        </ul>
      </div>

    </div>

  )
}

export default Sidebar