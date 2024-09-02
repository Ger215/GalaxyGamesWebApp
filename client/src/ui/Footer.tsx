import React from 'react';
import Container from './Container';
import { payment } from '../assets';
import FooterTop from './FooterTop';

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>© 2024 Germán Ramos. Todos los derechos reservados.</p>
        <img src={payment} alt="img-pago" className="object-cover" />
      </Container>
    </div>
  );
};

export default Footer;
