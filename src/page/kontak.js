import Footer from "../layout/footer";
import Navbar from "../layout/nav";
import React, { useState } from 'react';
import axios, { Axios } from "axios";
import Swal from "sweetalert2";

const Kontak = () => {

const [inputs, setInputs] = useState({})

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:80/binari/kontak/user/save', inputs);
    console.log(inputs);
    
    Swal.fire({  
        title: 'Berhasil',  
        text: 'Pesan Terkirim',
        icon: 'success',
        timer: 1000,
      }); 
}
    return ( 
        <>
        <Navbar />
            <div className="bg-banner6 bg-center h-[500px] bg-fixed bg-cover flex flex-col justify-center items-center text-white">
                <h2 className="text-5xl">KONTAK</h2>
            </div>
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center py-20 gap-8">
                <h1 className="text-4xl text-center w-1/2 ">Jangan ragu untuk mengontak kami untuk mendapatkan informasi tentang Binari</h1>
                <h2 className="text-2xl text-center w-1/2 text-gray-700">Kontak kami untuk segera mendapat bantuan</h2>
            </div>
            <div className="w-1/2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="w-full flex flex-col">
                        <span>Nama Lengkap</span>
                        <input required onChange={handleChange} name="name" type="text" className="w-full border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                    </div>
                <div className="w-full flex flex-col">
                        <span>Nomor Handphone</span>
                        <input required onChange={handleChange} name="phone" type="text" className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Alamat Email*</span>
                        <input required onChange={handleChange} name="email" type="email" className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Pesan Anda*</span>
                        <textarea required onChange={handleChange} name="message" id="" cols="30" rows="10" className=" border border-black outline-none focus:border-pink-600 transition p-3"></textarea>
                        <button className="w-1/3 bg-pink-600 text-white text-center mt-4 h-10 flex flex-col justify-center items-center">KIRIM PESAN</button>
                </div>
                </form>
                
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Kontak;