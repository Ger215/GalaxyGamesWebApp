import { useState } from 'react';
import { logo } from '../assets';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import Container from './Container';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const bottomNavigation = [
  { title: 'Inicio', link: '/' },
  { title: 'Tienda', link: '/product' },
  { title: 'Carrito', link: '/cart' },
  { title: 'Pedidos', link: '/orders' },
  { title: 'Perfil', link: '/profile' },
  { title: 'Blog', link: '/blog' },
];

const Header = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="w-full bg-whiteText">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between lg:px-0">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-60" />
        </Link>
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Buscar Producto"
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              className="absolute top-2 right-4 text-xl cursor-pointer hover:text-red-500 duration-200"
              onClick={() => setSearchText('')}
            />
          ) : (
            <IoSearchOutline className="absolute top-2 right-4 text-xl" />
          )}
        </div>
        <div className="flex items-center gap-x-6 text-2xl">
          <Link to={'/profile'}>
            <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
          </Link>
          <Link to={'/favorite'} className="relative block">
            <MdFavoriteBorder className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
          <Link to={'/cart'} className="relative block">
            <FiShoppingCart className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full bg-darkText text-whiteText ">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <p className="flex items-center gap-1">
            Categoria <FaChevronDown />
          </p>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group cursor-pointer"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;
