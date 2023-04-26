import React from 'react';

// Icons
import { RiSearchLine } from "react-icons/ri";
const Header = () => {
    return (
        <header className="p-4">
            {/* Title and Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                {/* Title */}
                <div>
                    <img src="/src/img/logo.png" alt="" className="lg:w-[350px] md:w-[350px]" />
                </div>

                {/* Search */}
                <form action="">
                    <div className="w-full relative">
                        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                        <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Buscar" />
                    </div>
                </form>
            </div>

        </header>
    )
}

export default Header