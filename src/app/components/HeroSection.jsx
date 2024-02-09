'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section className="lg:py-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold'>
            <span
              className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600'>
              Hola, somos{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Ingenieros de Software.',
                1000,
                'Web Developers.',
                1000,
                'Mobile Developers.',
                1000,
                'UI/UX Designers.',
                1000
              ]}
              wrapper="span"
              speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
              repeat={Infinity}
            />
          </h1>
          <p
            className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Potenciamos el crecimiento de tu negocio mediante servicios innovadores en desarrollo de software y soluciones tecnológicas de última generación. Descubre cómo convertir tu visión en realidad.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-800 hover:bg-slate-200 text-white'>Contáctanos</button>
          </div>


        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[230px] h-[230px] lg:w-[250px] lg:h-[250px] relative'>
            <Image
              src="/images/engineers_2_bg.png"
              alt="engineers_Team"
              width={250}
              height={250}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
