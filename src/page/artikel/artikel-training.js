import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay4 from '../../assets/layanan4.jpg'


const Training = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Training</h2>
            <div className="flex w-full gap-16"> 
                <img src={lay4} alt="" className="w-[600px]"/>
                <div className="flex flex-col">
                    <p>Pelatihan adalah sesuatu proses pendidikan jangka pendek dengan menggunakan prosedur yang sistematis dan terorganisir, sehingga karyawan operasional belajar pengetahuan teknik pengerjaan dan keahlian untuk tujuan tertentu.</p>
               

                    <Link to="/form-training" className="w-1/3 bg-pink-700 text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</Link>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-pink-500 hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Training;