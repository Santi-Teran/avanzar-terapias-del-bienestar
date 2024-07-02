'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { AiFillInfoCircle, AiFillMessage } from "react-icons/ai";

const NavBar = () => {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full fixed bg-slate-400 text-white shadow-xl z-10'>
      <div className='hidden md:flex justify-between items-center p-4'>
        <div className='flex items-center gap-12'>
          {/* <Link href='/' className='w-40'>
            <Image src={logo} alt='Marea Tech'/>
          </Link> */}
          <ul className='flex gap-12'>
            <Link href={'/'}><li className='cursor-pointer hover:scale-110 transition-all' onClick={() => scrollToSection('inicio')}>Inicio</li></Link>
            <Link href={'/product'}><li className='cursor-pointer hover:scale-110 transition-all'>Productos</li></Link>
            <Link href={'/'}><li className='cursor-pointer hover:scale-110 transition-all' onClick={() => scrollToSection('contacto')}>Contacto</li></Link>
            <Link href={'/'}><li className='cursor-pointer hover:scale-110 transition-all' onClick={() => scrollToSection('nosotros')}>Nosotros</li></Link>
          </ul>
        </div>
      </div>

      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-slate-400 z-10'>
        <ul className='text-white flex justify-around'>
          <Link className='flex flex-col items-center py-2' href={'/'}><li onClick={() => scrollToSection('inicio')} className='text-2xl cursor-pointer'><FaHome /></li>Inicio</Link>
          <Link className='flex flex-col items-center py-2' href={'/product'}><li className='text-2xl cursor-pointer'><FaShoppingCart /></li>Productos</Link>
          <Link className='flex flex-col items-center py-2' href={'/'}><li onClick={() => scrollToSection('contacto')} className='text-2xl cursor-pointer'><AiFillMessage /></li>Contacto</Link>
          <Link className='flex flex-col items-center py-2' href={'/'}><li onClick={() => scrollToSection('nosotros')} className='text-2xl cursor-pointer'><AiFillInfoCircle /></li>Nosotros</Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;