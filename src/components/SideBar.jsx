import Image from 'next/image';
// import logo from '../../public/mareatech.png';
import Link from 'next/link';
import { RiDashboardFill, RiScissors2Fill, RiCalendar2Fill, RiServiceFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div>
      <div className='flex-col w-60 bg-violet-800 md:flex hidden h-full'>
        {/* <Image src={logo} alt='Logo' className='p-4'/> */}
        <hr className='p-4'/>
        <ul className='flex flex-col text-white'>
          <Link href={'/dashboard'} className='p-4 hover:bg-orange '>Dashboard</Link>
        </ul>
      </div>

      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-violet-800 z-10'>
        <ul className='text-white flex justify-around'>
          <Link href={'/dashboard'} className='p-4 text-2xl '><RiDashboardFill /></Link>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;