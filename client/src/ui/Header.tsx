import React from 'react';
import { logo } from '../assets';
import { IoClose, IoSearchOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="w-full bg-whiteText">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between lg:px-0">
        <img src={logo} alt="logo" className="w-60" />
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          <IoSearchOutline className="absolute top-2 right-4 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
