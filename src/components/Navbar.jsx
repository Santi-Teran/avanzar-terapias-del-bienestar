'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { AiFillInfoCircle, AiFillMessage } from "react-icons/ai";

const NavBar = () => {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full fixed bg-white text-gray-800 shadow-xl z-10'>
      <div className='hidden md:flex justify-between items-center p-3'>
        <div className='flex items-center gap-12'>
          <Link href='/' className='w-8 bg-violet-600 h-8 rounded-full flex items-center justify-center text-white'>
            A
          </Link>
          <ul className='flex gap-12 items-center'>
            <Link href={'/'}><li className='cursor-pointer hover:text-violet-600 hover:scale-110 transition-all' onClick={() => scrollToSection('inicio')}>Inicio</li></Link>
            <Link href={'/product'}><li className='cursor-pointer hover:text-violet-600 hover:scale-110 transition-all'>Productos</li></Link>
            <Link href={'/'}><li className='cursor-pointer hover:text-violet-600 hover:scale-110 transition-all' onClick={() => scrollToSection('contacto')}>Contacto</li></Link>
            <Link href={'/'}><li className='cursor-pointer hover:text-violet-600 hover:scale-110 transition-all' onClick={() => scrollToSection('nosotros')}>Nosotros</li></Link>
            <div className='flex items-center gap-2 bg-gray-100 shadow-xl px-4 py-2 rounded-full'>
              <FaSearch className='text-violet-600' />
              <input placeholder='Busca un libro...' className='text-gray-800 bg-transparent focus:outline-none'/>
            </div>
          </ul>
        </div>
      </div>

      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white z-10 shadow-xl'>
        <ul className='text-gray-800 flex justify-around'>
          <Link className='flex flex-col items-center py-2' href={'/'}><li onClick={() => scrollToSection('inicio')} className='text-2xl cursor-pointer'><FaHome /></li>Inicio</Link>
          <Link className='flex flex-col items-center py-2' href={'/product'}><li className='text-2xl cursor-pointer'><FaShoppingCart /></li>Productos</Link>
          <Link className='flex flex-col items-center py-2' href={'/'}><li onClick={() => scrollToSection('contacto')} className='text-2xl cursor-pointer'><AiFillMessage /></li>Contacto</Link>
          <Link className='flex flex-col items-center py-2' href={'/'}><li onClick={() => scrollToSection('nosotros')} className='text-2xl cursor-pointer'><AiFillInfoCircle /></li>Nosotros</Link>
        </ul>
        <div className='fixed top-0 left-0 right-0 bg-white p-3 shadow-xl'>
          <div className='flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full'>
            <FaSearch className='text-gray-800' />
            <input placeholder='Busca un libro...' className='text-gray-800 bg-gray-200 focus:outline-none'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;