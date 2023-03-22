import Footer from "../../layout/footer"
import Navbar from "../../layout/nav"
import React, { useState } from 'react';
import axios, { Axios } from "axios";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Formstartup() {

const [inputs, setInputs] = useState({})

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:80/binari/startup/user/save', inputs);
    console.log(inputs);

    Swal.fire({  
        title: 'Berhasil',  
        text: 'Anda telah terdaftarkan',
        icon: 'success',
        timer: 1000,
      }); 
}

    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center py-20 gap-8">
                <h1 className="text-4xl text-center w-1/2 ">Jangan ragu untuk mengontak kami</h1>
                <h2 className="text-2xl text-center w-1/2 text-gray-700">Daftar Segera</h2>
            </div>
            <div className="w-1/2">
                <Link to="/startup" className="flex items-center mb-10 gap-2 hover:text-pink-500 hover:pl-2 transition-all text-lg"><IoArrowBack/>Kembali</Link>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="w-full flex flex-col">
                    <span>Nama Lengkap</span>
                    <input type="text" name="name"  onChange={handleChange}className="w-full border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Nomor Handphone</span>
                        <input type="text" name="phone" onChange={handleChange}className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Alamat Email*</span>
                        <input type="email" name="email" onChange={handleChange} className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <button className="w-1/3 bg-pink-700 text-white text-center mt-4 h-10 flex flex-col justify-center items-center">Daftar</button>
                </form>
                
            </div>
        </div>
        <Footer/>
        </>
     );
}
