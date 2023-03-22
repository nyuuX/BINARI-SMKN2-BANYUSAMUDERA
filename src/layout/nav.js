import logo from '../assets/logo.png';
import { FaHome, FaTools, FaComment } from "react-icons/fa";
import { IoAlertOutline, IoPeople, IoCalendarClear } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
        <nav className="flex w-full justify-evenly py-4 px-28 absolute text-white top-0 left-0 z-50 rounded-b-xl">
            <ul className='flex gap-8 justify-center items-center text-xl'>
                <li><img src={logo} alt="" className='w-14 h-14 mr-36'/></li>
                <li><NavLink to="/" className='flex items-center gap-1 hover:text-pink-500 hover:border-b-2 border-pink-500 transition'><FaHome/>Beranda</NavLink></li>
                <li><NavLink to="/tentang" className='flex items-center gap-1 hover:text-pink-500 hover:border-b-2 border-pink-500 transition'><IoAlertOutline/>Tentang</NavLink></li>
                <li><NavLink to="/layanan" className='flex items-center gap-1 hover:text-pink-500 hover:border-b-2 border-pink-500 transition'><FaTools/>Layanan</NavLink></li>
                <li><NavLink to="/acara" className='flex items-center gap-1 hover:text-pink-500 hover:border-b-2 border-pink-500 transition'><IoCalendarClear/>Acara</NavLink></li>
                <li><NavLink to="/kontak" className='flex items-center gap-1 hover:text-pink-500 hover:border-b-2 border-pink-500 transition'><FaComment/>Kontak</NavLink></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navbar;