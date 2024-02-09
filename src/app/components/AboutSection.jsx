import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/espacio.jpg'
          alt='workSpace'
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca de Nosotros</h2>
          <p className="text-base lg:text-lg">Somos un equipo de  desarrollo de software, dedicados a brindar soluciones  excepcionales y personalizadas para impulsar el éxito de tu negocio. Nos especializamos en la creación de aplicaciones interactivas y receptivas, destacando por nuestra capacidad para comprender a fondo las necesidades de nuestros clientes.

            Nuestra misión es ofrecer servicios de desarrollo  que no solo cumplan, sino que superen tus expectativas. Enfocamos nuestro trabajo en la innovación y la calidad, y nos enorgullece colaborar contigo para lograr resultados sobresalientes. Si estás buscando un equipo confiable y comprometido para llevar a cabo tu próximo proyecto, estamos aquí para ofrecerte soluciones que impulsen tu presencia en línea y contribuyan al éxito de tu negocio.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
