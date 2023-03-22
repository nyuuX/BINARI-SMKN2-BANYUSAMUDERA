import Footer from "../layout/footer";
import Navbar from "../layout/nav";
import lay1 from '../assets/layanan1.png'
import lay2 from '../assets/layanan2.png'
import lay3 from '../assets/lay3.jpg'
import lay4 from '../assets/layanan4.jpg'

const Layanan = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Kami menyediakan berbagai macam layanan bisnis.</h2>
            <div className="row flex justify-center w-full gap-36">
                <div className="w-1/4 border shadow-xl rounded-[15px] overflow-hidden">
                    <a href="/startup">
                        <div className="overflow-hidden">
                            <img src={lay1} alt="" className="w-full h-72 hover:scale-105 hover:brightness-75 transition" />
                        </div>
                        <div className="py-5 px-4 flex flex-col gap-4 bg-white h-full">
                            <h1 className="text-xl">Program Inkubasi Startup</h1>
                            <p>Satu tahun program Inkubator dengan kesempatan pendanaan sampai 350 juta rupiah / perusahaan.</p>
            
                        </div>
                    </a>
                </div>
                <div className="w-1/4 border shadow-xl rounded-[15px] overflow-hidden">
                    <a href="/workshop">
                        <div className="overflow-hidden">
                            <img src={lay2} alt="" className="w-full h-72 hover:scale-105 hover:brightness-75 transition" />
                        </div>
                        <div className="py-5 px-4 flex flex-col gap-4 bg-white h-full">
                            <h1 className="text-xl">Kegiatan Workshop</h1>
                            <p>Perdalam ilmu melalui Binari Startup Class dan Binari Startup Talk.</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row flex justify-center w-full gap-36">
                <div className="w-1/4 border shadow-xl rounded-[15px] overflow-hidden">
                    <a href="/praktek-kerja-lapangan">
                        <div className="overflow-hidden">
                            <img src={lay3} alt="" className="w-full h-72 hover:scale-105 hover:brightness-75 transition" />
                        </div>
                        <div className="py-5 px-4 flex flex-col gap-4 bg-white h-full">
                            <h1 className="text-xl">PKL</h1>
                            <p>Membantu mahasiswa untuk memiliki wawasan karier, memilih bidang karier yang ulet dan gigih dalam berkompetensi.</p>     
                        </div>
                    </a>
                </div>
                <div className="w-1/4 border shadow-xl rounded-[15px] overflow-hidden">
                    <a href="/training">
                        <div className="overflow-hidden">
                            <img src={lay4} alt="" className="w-full h-72 hover:scale-105 hover:brightness-75 transition" />
                        </div>
                        <div className="py-5 px-4 flex flex-col gap-4 bg-white h-full">
                            <h1 className="text-xl">Training</h1>
                            <p>Kembangkan skill Anda.</p>                        
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Layanan;