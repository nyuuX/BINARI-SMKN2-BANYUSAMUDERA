import Carousel from "../layout/carousel";
import Navbar from "../layout/nav";
import meeting from '../assets/meeting.jpg';
import meeting2 from '../assets/meeting2.jpg';
import meeting3 from '../assets/meeting3.jpg';
import meeting4 from '../assets/meeting4.jpg';
import Footer from "../layout/footer";

const Home = () => {
    return ( 
        <>
        <Navbar />
        <Carousel />
        <div className="mt-56 text-center flex flex-col items-center w-full">
            <h2 className="text-4xl mb-16">Binari Jalan Bisnis Anda</h2>
            <p className="w-2/3 text-2xl">"Menyediakan Jalan Yang luas Bagi Bisnis Anda"</p>
            <p className="w-2/3 text-2xl"> Bergabunglah Bersama Kami Untuk Evolusi, Buat Perubahan untuk Indonesia, Kembangkan Generasi Pengusaha, dan Buat Dunia yang Lebih Baik.</p>
        </div>
        <div className="my-36 flex flex-col gap-12">
            <div className="flex justify-center gap-32 w-full">
                <div className="flex flex-col items-center align-middle w-1/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Program Inkubator Bisnis</p>
                    <p className="text-xl">PRODUCT ACCELERATOR</p>
                </div>
                <div className="flex flex-col items-center align-middle w-1/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting2} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Program Edukasi Intensif</p>
                    <p className="text-xl">FOUNDER BOOTCAMP</p>
                </div>
            </div>
            <div className="flex justify-center gap-32 w-full">
                <div className="flex flex-col items-center align-middle w-1/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting3} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Jaringan Investor</p>
                    <p className="text-xl">DIGITAL MARKETING</p>
                </div>
                <div className="flex flex-col items-center align-middle w-1/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting4} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Manajemen Keuangan</p>
                    <p className="text-xl">FINANCE & TAX</p>
                </div>
            </div>
        </div>
        <div className=" items-center align-middle  justify-center bg-banner1 h-[500px] bg-fixed bg-cover flex flex-col  text-white   ">
            <h2 className="text-2xl">TUMBUH KEMBANG DENGAN BERKOLABORASI, BELAJAR, DAN MENDAPATKAN AKSES KE JARINGAN STRATEGIS BINARI!</h2>
            <p>Jadilah bagian dari Binari dan skalakan bisnis Anda dengan sukses!</p>
        </div>
        <Footer />
        </>
     );
}
 
export default Home;