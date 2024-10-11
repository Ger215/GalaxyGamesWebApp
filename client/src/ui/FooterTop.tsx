import React from 'react';
import Container from './Container';

const FooterTop = () => {
  const incentives = [
    {
      name: 'Envío gratis y en minutos',
      imageSrc:
        'https://img.icons8.com/ios/100/000000/in-transit',
      description:
        'Contamos con envío gratis y en minutos en todos nuestros productos.',
    },
    {
      name: '1 año de Garantía',
      imageSrc:
        'https://img.icons8.com/ios/100/000000/warranty',
      description:
        'Todos nuestros productos cuentan con garantía válida por 1 año.',
    },
    {
      name: 'Contacto 24/7',
      imageSrc: 'https://img.icons8.com/ios/100/000000/technical-support.png',
      description:
        'Soporte las 24 horas del día para cualquier duda o consulta que le pueda surgir.',
    },
  ];
  return (
    <Container className="py-0">
      <div className="rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Ofrecemos el mejor servicio dedicado a la venta de videojuegos
              digitales
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flex-root">
                  <img
                    src={item?.imageSrc}
                    alt="imagen"
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-medium text-gray-900">
                  {item?.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
