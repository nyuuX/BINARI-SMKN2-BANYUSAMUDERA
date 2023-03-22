import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay2 from '../../assets/layanan2.png'


const Workshop = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Kegiatan Workshop</h2>
            <div className="flex w-full gap-16"> 
                <img src={lay2} alt="" />
                <div className="flex flex-col">
                    <p className="font-bold text-xl mb-10">Startup Class dan Startup Talk</p>
                    <p>Startup Class dan Startup Talk adalah kelas pembelajaran yang khusus diadakan oleh Binari. Pengisi materi Startup Class dan startup Talk adalah para ahli di bidangnya yang juga berkecimpung langsung di dunia startup. Khusus Startup Class peserta adalah terbatas untuk para tenant binaan Binari. Para sesi startup class ini para tenant bisa bertanya dan berdiskusi langsung dengan para pemateri tentang masalah yang dihadapi mereka dalam menjalankan bisnis yang sedang dijalani.</p>
                    <Link to="/form-workshop" className="w-1/3 bg-pink-700 text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</Link>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-pink-500 hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Workshop;