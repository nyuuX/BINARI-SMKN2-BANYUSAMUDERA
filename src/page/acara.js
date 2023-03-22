import Footer from "../layout/footer";
import Navbar from "../layout/nav";
import acara from '../assets/acara.jpeg';
import acara2 from '../assets/acara2.jpeg';
import acara3 from '../assets/acara3.png';
import acara4 from '../assets/acara4.jpg';
import acara5 from '../assets/acara5.jpg';
import acara6 from '../assets/acara6.jpg';

const Acara = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner5 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">ACARA BINARI</h2>
        </div>
        <div className="w-full flex flex-col py-36 justify-center items-center gap-20">
            <div className="flex w-2/3">
                <img src={acara} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">Binari STARTUP INCUBATOR WEB 3.0 SERIES</h1>
                    <p className="text-xl">Binari STARTUP INCUBATOR WEB 3.0 SERIES "NFT Sebagai Potensi Ekonomi Kreatif Baru" Ingin buat NFT tapi bingung bagaimana caranya?Bingung bagaimana membangun hype...</p>
                    <a href="https://cubic.id/events/cubic-startup-incubator-web-30-series" className="font-bold text-xl transition hover:text-pink-600" target="_blank">Selengkapnya</a>
    
                </div>
            </div>
            <div className="flex flex-row-reverse text-right w-2/3">
                <img src={acara2} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">Microsoft Dev//Verse</h1>
                    <a href="https://cubic.id/acara/microsoft-devverse" className="font-bold text-xl transition hover:text-pink-600" target="_blank">Selengkapnya</a>
    
                </div>
            </div>
            <div className="flex w-2/3">
                <img src={acara3} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">Open Batch Program Pendampingan Startup, UMKM, dan Koperasi</h1>
                    <p className="text-xl">Halo sobat Entrepereneur Binari Inkubator Bisnis membuka program pendampingan untuk startup, UMKM dan koperasi. Program pendampingan ini bertjuan untuk meningkatkan...</p>
                    <a href="https://cubic.id/events/open-batch-program-pendampingan-startup-umkm-dan-koperasi" className="font-bold text-xl transition hover:text-pink-600" target="_blank">Selengkapnya</a>
    
                </div>
            </div>
            <div className="flex flex-row-reverse text-right w-2/3">
                <img src={acara4} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">Startup Talk "How to start a Startup in 2020"</h1>
                    <p className="text-xl">CALLING ALL STARTUP GOOD NEWS FOR YOU! Binari akan menyelenggarakan startup talk & mentoring bersama Achmad Zaky*"How to Start a...</p>
                    <a href="https://cubic.id/acara/startup-talk-how-to-start-a-startup-in-2020" className="font-bold text-xl transition hover:text-pink-600" target="_blank">Selengkapnya</a>
                </div>
            </div>
            <div className="flex w-2/3">
                <img src={acara5} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">NTT STARTUP CHALLENGE 2019</h1>
                    <p className="text-xl">Coming back for its third year, NTT Startup Challenge will be supporting startup ecosystem in Indonesia! By just submitting your...</p>
                    <a href="https://cubic.id/acara/ntt-startup-challenge-2019" className="font-bold text-xl transition hover:text-pink-600" target="_blank">Selengkapnya</a>
                </div>  
            </div>
            <div className="flex flex-row-reverse text-right w-2/3">
                <img src={acara6} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">BANDUNG STARTUP MARKET DAY</h1>
                    <p className="text-xl">Hi Startups!Binari adalah startup incubator yang konsisten berkontribusi dalam pengembangan ekosistem startup dan telah mendampingi puluhan startup di Indonesia. Acara...</p>
                    <a href="https://cubic.id/events/bandung-startup-market-day" className="font-bold text-xl transition hover:text-pink-600" target="_blank">Selengkapnya</a>
                </div>
            </div>
        </div>
        
        <Footer/>
        </>
     );
}
 
export default Acara;