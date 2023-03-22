import Footer from "../layout/footer";
import Navbar from "../layout/nav";
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.jpg';

const Tentang = () => {
    return ( 
        <>
        <Navbar />
        <div className="bg-banner1 bg-fixed bg-cover bg-center h-[500px]  flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">TENTANG BINARI</h2>
        </div>
        <div className="text-center py-32 w-full flex flex-col items-center">
            <h2 className="text-xl text-gray-500 mb-8">SELAMAT DATANG DI BINARI</h2>
            <p className="text-4xl w-4/5">Binari inkubator merupakan program Inkubasi startup melalui serangkaian seleksi mulai dari bootcamp, mentoring beasiswa hingga akses funding.</p>
        </div>
        <div className="flex justify-evenly py-32 bg-gray-50">
            <div className="text-center w-1/3 p-20 rounded-2xl shadow-2xl border transition bg-white">
                <h2 className="text-3xl mb-4">Visi</h2>
                <p className="text-lg">Visi kami adalah menjadi Inkubator terbaik untuk Startups bidang teknologi informasi dan komunikasi di Indonesia.</p>
            </div>
            <div className="text-center w-1/3 p-20 shadow-2xl rounded-2xl border transition bg-white">
                <h2 className="text-3xl mb-4">Misi</h2>
                <ul className="text-left list-disc text-lg">
                    <li>Mengelola program Inkubator yang berfokus pada solusi dan inovasi berkelanjutan.</li>
                    <li>Menyediakan fasilitas yang mendorong Startup untuk menjadi kreatif dan produktif.</li>
                    <li>Menjadi penghubung untuk Startup dengan sinergi program dan kolaborasi dengan investor, pemerintah, perusahaan, akademisi, media dan komunitas.</li>
                    <li>Mengelola pendanaan yang menguntungkan dan modal pertumbuhan untuk Investor dan Startup.</li>
                </ul>
            </div>
        </div>
        <div className="py-20 px-20">
            <h2 className="text-4xl mb-20 text-center">Tim Kami</h2>
            <div className="flex flex-col gap-24">
                <div className="flex flex-row justify-center gap-36">
                    <div className=" rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p1} alt="" className=" h-52 rounded-lg mr-0 relative"/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">Yoanes Bandung</p>
                        <p className="text-xl font-semibold text-gray-600">Incubator Manager</p>
                    </div>
                    <div className="rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p2} alt="" className=" h-52 rounded-lg mr-0 "/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">Armein Z R Langi</p>
                        <p className="text-xl font-semibold text-gray-600">Chief Of Partnership</p>
                    </div>
                    <div className="rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p3} alt="" className=" h-52 rounded-lg mr-0 "/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">Dwi Hendratmo Widyantoro</p>
                        <p className="text-xl font-semibold text-gray-600">General Manager Binari</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-36">
                    <div className="rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p4} alt="" className=" h-52 rounded-lg mr-0 "/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">Mervin T. Hutabarat</p>
                        <p className="text-xl font-semibold text-gray-600">Chief Of Marketing</p>
                    </div>
                    <div className="rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p5} alt="" className=" h-52 rounded-lg mr-0 "/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">M. Fahmi Nurfadillah</p>
                        <p className="text-xl font-semibold text-gray-600">IT Staff</p>
                    </div>
                    <div className="rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p6} alt="" className=" h-52 rounded-lg mr-0 "/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">Mohammad Maulana</p>
                        <p className="text-xl font-semibold text-gray-600">Busdev. Manager Binari</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-36">
                    <div className="rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p7} alt="" className=" h-52 rounded-lg mr-0 "/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">Vitradisa</p>
                        <p className="text-xl font-semibold text-gray-600">Vitradisa</p>
                    </div>
                    <div className="rounded-[100px] text-left p-10  transition w-96 border rounded-tr-none rounded-bl-none shadow-2xl">
                        <div className="flex justify-center p-2">
                            <img src={p8} alt="" className=" h-52 rounded-lg mr-0 "/>
                        </div>
                        <p className="text-2xl font-semibold mt-8">Asep Saepuloh</p>
                        <p className="text-xl font-semibold text-gray-600">Idventure Manager</p>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Tentang;