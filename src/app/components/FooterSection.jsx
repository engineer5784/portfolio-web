import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        <div style={{ maxWidth: '75px', maxHeight: '60px' }}>
          <Image 
          src='/images/logo_4.png' 
          alt='logo_footer'  
          width={75} 
          height={40} 
          style={{ width: 'auto', height: 'auto' }}
          priority={true}
          />
        </div>
        <p className='text-gray-700 text-center text-sm italic my-4 md:my-0'>
          Más que una disciplina o una parte del conocimiento, la ingeniería es una palabra de acción...<br />- Scott Whitmire
        </p>
        <p className="text-center text-yellow-600">©️ Todos los derechos reservados 2024.</p>
      </div>


    </footer>
  );
};

export default Footer;