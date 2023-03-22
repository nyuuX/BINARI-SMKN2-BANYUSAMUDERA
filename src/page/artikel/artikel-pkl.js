import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay3 from '../../assets/lay3.jpg'


const Pkl = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Praktek Kerja Lapangan</h2>
            <div className="flex w-full gap-16"> 
                <img src={lay3} alt="" className="w-[600px]"/>
                <div className="flex flex-col">
                    <p><span className="font-bold">PRAKTEK KERJA LAPANGAN (PKL)</span> adalah salah satu bentuk kegiatan yang bertempat di lingkungan kerja langsung. PKL bisa dilakukan oleh murid SMK, mahasiswa maupun karyawan baru. Di tingkat mahasiswa, PKL merupakan implementasi secara sistematis dan sinkron antara program pendidikan di sekolah dengan program penguasaan keahlian yang diperoleh melalui kegiatan kerja secara langsung di dunia kerja untuk mencapai tingkat keahlian tertentu, dalam bahasa kemahasiswaan biasa disebut “magang” atau Intern.</p>
                <p className="font-bold text-lg mt-10">Manfaat dari PKL:</p>
                <p>Membantu siswa untuk memiliki wawasan karier, memilih bidang karier yang ulet dan gigih dalam berkompetensi, beradaptasi dalam lingkungan kerja, serta mampu mengembangkan sikap profesional dalam bidang keahliannya.</p>

                    <Link to="/form-pkl" className="w-1/3 bg-pink-700 text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</Link>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-pink-500 hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Pkl;