'use client'
import { Lexend_Deca } from 'next/font/google'
import { useState } from 'react';

const lato = Lexend_Deca({
  subsets: ['latin'],
  weight: '700'
})


export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white h-screen flex justify-center items-center bg-gray-100">

      <div onClick={e => setShow(true)} className={` ${!show ? '' : 'hidden'} ${lato.className} border border-2 border-gray-300 flex flex-col bg-white inset-shadow-sm inset-shadow-indigo-500 rounded-xl p-10 gap-6 hover:bg-gray-300 cursor-pointer`}>
        <img src="./cups-icon.svg" className='w-full h-full' alt="" />
        <button className={`text-black text-3xl`}>
          Mulai
        </button>
      </div>

      <div className={`${show ? '' : 'hidden'} flex flex-col items-center justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
        <div className={`${lato.className} text-black text-2xl text-center`}>
          Terima Kasih <br></br> Telah Menggunakan Layanan Kami
        </div>
      </div>
    </div >
  );
}
