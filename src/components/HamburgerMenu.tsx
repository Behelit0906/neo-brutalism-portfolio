import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

function HamburgerMenu() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navBarClasses, setNavbarClasses] = useState('w-0 max-w-[378px] h-full transition-all duration-300 overflow-hidden');


  useEffect(() => {
    const switchShowNavbar = () => {
      setShowNavbar(false);
    }
    window.addEventListener('resize', switchShowNavbar);

    return () => window.removeEventListener('resize', switchShowNavbar);
  })

  const backgroundClasses = `absolute ${!showNavbar ? 'hidden' : ''} top-0 left-0 w-screen h-screen bg-[#11111180]`

  function hamburgerClickHandler() {
    setShowNavbar(true);
    document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
    setTimeout(() => {
      setNavbarClasses('w-[75%] max-w-[378px] h-full py-8 px-5 bg-[#F9F4F0] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300')
    })
  }


  const closeMenu = (seconds:number) => {
    setNavbarClasses('w-0 max-w-[378px] h-full transition-all duration-300 overflow-hidden');
    setTimeout(() => {
      setShowNavbar(false);
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
    }, seconds)
  }

  function outClickHandler () {
    closeMenu(300);
  }

  function inClickHandler (e:React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  function linkClickHandler () {
    closeMenu(0);
  }


  return (
    <div className="md:hidden">
      <GiHamburgerMenu onClick={hamburgerClickHandler} className="text-3xl hover:cursor-pointer" />
      <div className={backgroundClasses} onClick={outClickHandler}>
        <nav onClick={inClickHandler} className={navBarClasses}>
          <span className='block w-[200px] font-bold text-lg mb-8'>LUIS SALCEDO</span>
          <ul className="space-y-5">
            <li>
              <a onClick={linkClickHandler} href="#experiencia" className='hover:underline hover:underline-offset-8'>Experiencia</a>
            </li>
            <li>
              <a onClick={linkClickHandler} href="#proyectos" className='hover:underline hover:underline-offset-8'>Proyectos</a>
            </li>
            <li>
              <a onClick={linkClickHandler} href="#habilidades" className='hover:underline hover:underline-offset-8'>Habilidades</a>
            </li>
            <li>
              <a onClick={linkClickHandler} href="#sobre mi" className='hover:underline hover:underline-offset-8'>Sobre mi</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HamburgerMenu;