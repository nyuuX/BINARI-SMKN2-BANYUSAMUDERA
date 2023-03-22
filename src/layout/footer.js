import { AiFillTwitterCircle,AiFillInstagram,AiFillFacebook } from "react-icons/ai";
import logo from '../assets/logo.png';

const Footer = () => {
    return ( 
        <div className="mt-40">
            <footer className='flex flex-row text-black py-28 px-10 justify-center gap-64 bg-gray-100 bg-no-repeat bg-cover bg-center'>
                <div className="w-[300px] space-y-3">
                    <h1 className=" text-2xl font-semibold">Hubungi Kami</h1>
                    <p className="text-lg">Jl. Pelajar Pejuang 45 No, 65 Bandung</p>

                </div>
                <div className="ml-7">
                    <h1 className=" text-2xl font-semibold">Tautan berguna</h1>
                    <ul className="leading-9 text-lg text-gray-700">
                        <li><a href="/" className="hover:text-pink-500 transition"><span className="mr-1 font-medium"></span>Beranda</a></li>
                        <li><a href="/tentang" className="hover:text-pink-500 transition"><span className="mr-1 font-medium"></span>Tentang</a></li>
                        <li><a href="/layanan" className="hover:text-pink-500 transition"><span className="mr-1 font-medium"></span>Layanan</a></li>
                        <li><a href="/startup" className="hover:text-pink-500 transition"><span className="mr-1 font-medium"></span>Startup</a></li>
                        <li><a href="/acara" className="hover:text-pink-500 transition"><span className="mr-1 font-medium"></span>Acara</a></li>
                        <li><a href="/kontak" className="hover:text-pink-500 transition"><span className="mr-1 font-medium"></span>Kontak</a></li>
                    </ul>
                </div>        
                <div className="w-[500px]">
                    <h1 className="text-2xl font-semibold">Tentang Binari</h1>
                    <p className="text-lg">Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology"</p>
                    <p className="text-lg"><strong><a href="">Selengkapnya</a></strong></p>
                    <div className="flex flex-row gap-2 my-2 text-gray-700">
                        <AiFillFacebook fontSize="2rem"/>
                        <AiFillInstagram fontSize="2rem"/>
                    </div>
                    <div className="">
                        <img src={logo} alt="" className="w-[150px] h-[150px] mt-10" />
                        <p className="my-5 font-semibold">© 2022 Binari. All rights reserved</p>
                    </div>
                </div>
                
            </footer>

            
        </div>
     );
}
 
export default Footer;