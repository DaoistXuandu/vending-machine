import { Lexend_Deca } from 'next/font/google'

const lato = Lexend_Deca({
  subsets: ['latin'],
  weight: '700'
})


export default function Home() {
  return (
    <div className="bg-white h-screen flex justify-center items-center bg-gray-100">
      <div className={`${lato.className} border border-2 border-gray-300 flex flex-col bg-white inset-shadow-sm inset-shadow-indigo-500 rounded-xl p-10 gap-6 hover:bg-gray-300 cursor-pointer`}>
        <img src="./cups-icon.svg" className='w-full h-full' alt="" />
        <button className={`text-black text-3xl`}>
          Mulai
        </button>
      </div>
    </div >
  );
}
