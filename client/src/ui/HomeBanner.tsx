import React from 'react';
import Container from './Container';
import homeBanner from '../assets/homeBanner.webp';
import LinkButton from './LinkButton';

const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative">
        <img
          src={homeBanner}
          alt="homeBanner"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-10">
        <h2 className="text-xl md:text-4xl lg:text-6xl text-whiteText font-bold">
          Cyberpunk 2077
        </h2>
        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mt-4">
          El nuevo juego de CD Project
        </p>
        <LinkButton className="w-44 flex items-center justify-center bg-white text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4" />
      </div>
    </Container>
  );
};

export default HomeBanner;
