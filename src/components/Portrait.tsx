import me from '../assets/me.webp';
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";

function Portrait () {
  return (
    <article className='relative w-[200px] h-[280px] md:w-[230px] md:h-[310px] p-5 pb-14 bg-[#F9F4F0] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
      <section className='w-full h-full bg-[#FDFD96] border-black border-4'>
        <img className='w-full h-full mb-3' src={me} alt="" />
        <span className='block text-center'>@luissalcedo</span>
        <span className='absolute top-8 right-[-10px] flex items-center justify-center w-[35px] h-[35px] bg-[#FCDFFF] border-2 border-black rotate-[15deg]'>
          <SiTailwindcss className='text-xl' />
        </span>
        <span className='absolute top-0 left-8 flex items-center justify-center w-[35px] h-[35px] bg-[#87ceeb] border-2 border-black rotate-[-45deg]'>
          <SiTypescript className='text-xl' />
        </span>
        <span className='absolute bottom-20 left-[-10px] flex items-center justify-center w-[35px] h-[35px] bg-[#FDFD96] border-2 border-black rotate-[25deg]'>
          <FaReact className='text-xl' />
        </span>
        <span className='absolute bottom-16 right-5 flex items-center justify-center w-[35px] h-[35px] bg-[#bafca2] border-2 border-black rotate-[30deg]'>
          <IoLogoVue className='text-xl' />
        </span>
      </section>
    </article>
  )
}

export default Portrait