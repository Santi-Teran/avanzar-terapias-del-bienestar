import Image from 'next/image';
import Link from 'next/link';
import { RiDashboardFill, RiScissors2Fill, RiCalendar2Fill, RiServiceFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <div className='md:flex hidden justify-between items-center fixed w-full bg-gray-600 text-white p-4 shadow-md shadow-black'>
        <div className='flex items-center gap-12'>
          <Link href='/' className='md:w-1/6 w-1/2'>
            {/* <Image src={logo} alt='Marea Tech'/> */}
          </Link>
          <ul className='flex gap-12'>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Nosotros</li>
          </ul>
        </div>
      </div>

      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-gray-600 z-10'>
        <ul className='text-white flex justify-around'>
          <Link href={'/dashboard'} className='p-4 text-2xl '><RiDashboardFill /></Link>
          <Link href={'/dashboard/turnos'} className='p-4 text-2xl '><RiScissors2Fill /></Link>
          <Link href={'/dashboard/calendario'} className='p-4 text-2xl '><RiCalendar2Fill /></Link>
          <Link href={'/dashboard/servicios'} className='p-4 text-2xl '><RiServiceFill /></Link>
        </ul>
      </div>
    </>
  )
}

export default NavBar;
