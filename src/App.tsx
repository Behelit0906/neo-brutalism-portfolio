import anime from './assets/anime.webp';
import javier from './assets/javier.webp';
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import ProjectCard from './components/ProjectCard';
import { SiTypescript } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import HamburgerMenu from './components/HamburgerMenu';
import Portrait from './components/Portrait';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {

  return (
    <section className='flex flex-col gap-5 mx-auto items-center max-w-[1050px] font-lexend'> 
      <header className='w-full h-[60px] px-5 flex justify-between items-center border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
        <h1 className='font-bold text-lg'>
          LUIS SALCEDO
        </h1>
        <HamburgerMenu />
        <nav className='hidden md:flex sm:gap-5 md:gap-7 text-sm'>
          <a href="#experiencia" className='hover:underline hover:underline-offset-8'>Experiencia</a>
          <a href="#proyectos" className='hover:underline hover:underline-offset-8'>Proyectos</a>
          <a href="#habilidades" className='hover:underline hover:underline-offset-8'>Habilidades</a>
          <a href="#sobre mi" className='hover:underline hover:underline-offset-8'>Sobre mi</a>
        </nav>
      </header>
      <section className='w-full py-20 px-10 bg-[#FDFD96] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
        <h2 className='text-center text-2xl sm:text-4xl font-bold mb-5 text-balance'>
          Código Brillante, <br />
          Perfección Pixelada
        </h2>
        <p className="text-center text-lg sm:text-2xl text-balance">
          Transformando líneas en innovación,
          Marcando la diferencia a través del código.
        </p>
      </section>
      <section id='experiencia' className='w-full py-10 px-5 sm:px-9 bg-[#FCDFFF] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
        <h2 className="text-2xl font-bold mb-5">
          Experiencia
        </h2>
        <div>
          <article className="flex flex-col md:flex-row py-5 justify-center gap-5 w-full p-3 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <div className="md:w-[30%]">
              <h3 className="md:text-lg font-bold text-balance mb-1">Desarrollador de Automatización en Prácticas Universitarias</h3>
              <p className="font-bold text-sm">Carbones de Cerrejón</p>
              <p className="text-xs">Marzo 2023 - Septiembre 2023</p>
            </div>
            <div className="md:w-[70%] text-balance text-sm">
              Durante mis seis meses de prácticas universitarias, asumí el rol clave de automatizar procesos para agilizar las operaciones. Enfrenté el desafío de mejorar la generación de informes, implementando soluciones innovadoras con Python y Selenium. Mi contribución más destacada fue la automatización de la recolección de datos desde aplicativos web para la creación eficiente de informes en Excel.
            </div>
          </article>
        </div>
      </section>
      <section id='proyectos' className='w-full py-10 px-5 sm:px-9 bg-[#DAF5F0] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
        <h2 className="text-2xl font-bold mb-5">
          Proyectos
        </h2>
        <div className='flex flex-col gap-5'>
          <ProjectCard 
            name='JkAnime' 
            img={anime}
            description='Clon personalizado de Jkanime.net. Desarrollado completamente desde cero con React y Tailwind CSS. Este rincón virtual es mi homenaje al mundo del anime.'  
            repoLink='https://github.com/Behelit0906/jk-anime-clone'
            previewLink='https://main--jkanime-clone.netlify.app/'
            technologies={[{ 
                name: 'React', 
                icon: <FaReact className='inline'/> 
              },
              {
                name: 'Tailwind',
                icon: <SiTailwindcss className='inline' />
              }
            ]}
          />
          <ProjectCard 
            name="HiI'mJavier" 
            img={javier}
            description="HiI'mJavier es una plataforma web para conectar a Javier, tu guía turístico de confianza, con todos aquellos viajeros amantes de la historia en la ciudad de Santa Marta."
            previewLink='https://javierproject-production.up.railway.app/'
            technologies={[{ 
                name: 'Nuxt', 
                icon: <SiNuxtdotjs className='inline' /> 
              },
              {
                name: 'Tailwind',
                icon: <SiTailwindcss className='inline' />
              },
              {
                name: 'Express',
                icon: <SiExpress className='inline' />
              },
              {
                name: 'MongoDB',
                icon: <DiMongodb className='inline' />
              }
            ]}
          />
        </div>
      </section>
      <section id='habilidades' className='w-full py-10 px-5 sm:px-9 bg-[#FDFD96] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
        <h2 className="text-2xl font-bold mb-5">
          Habilidades
        </h2>
        <div className='flex justify-center flex-wrap gap-4 sm:gap-9 text-4xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] py-5 px-3 md:p-9'>
          <span className='flex items-center justify-center w-16 h-16 bg-[#69D2E7] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <SiTypescript />
          </span>
          <span className='flex items-center justify-center w-16 h-16 bg-[#ff6b6b] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <FaReact /> 
          </span>
          <span className='flex items-center justify-center w-16 h-16 bg-[#90e90e] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <IoLogoVue />
          </span> 
          <span className='flex items-center justify-center w-16 h-16 bg-[#a388ee] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <SiTailwindcss />
          </span> 
          <span className='flex items-center justify-center w-16 h-16 bg-[#f8d6b3] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <SiExpress />
          </span>
          <span className='flex items-center justify-center w-16 h-16 bg-[#b5d2ad] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <DiMongodb />
          </span>
          <span className='flex items-center justify-center w-16 h-16 bg-[#fcdfff] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <SiMysql />
          </span>             
        </div>
      </section>
      <section id='sobre mi' className='w-full py-10 px-5 sm:px-9 bg-[#FCDFFF] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]'>
        <h2 className="text-2xl font-bold mb-5">
          Sobre mi
        </h2>
        <div>
          <div className='mb-8 smm:float-right smm:ml-3 smm:mb-5'>
            <Portrait />
          </div>
          <div className='text-sm text-balance'>
            <p>¡Hola, soy Luis! 🚀</p> <br />
            <p>
              Soy Luis, un apasionado desarrollador web de corazón. Aunque aún no tenido mi primer empleo formal en el campo, mis 6 meses de prácticas universitarias como ingeniero de sistemas fueron un viaje emocionante en la automatización de tareas.
            </p>
            <br />
            <p>
              Usé mi habilidad con Python y librerías como Selenium para realizar scraping web, acceder a bases de datos y manipular archivos de Excel. Esta experiencia real me mostró cómo la tecnología impulsa la eficiencia en las operaciones diarias.
            </p>
            <br />
            <p>
              Desde entonces, mi pasión por el desarrollo web ha crecido exponencialmente. Aunque no tengo una lista interminable de proyectos, la resolución de problemas y la creatividad son mi enfoque constante.
            </p>
            <br />
            <p className='mb-6'>
              Si buscas a alguien con una base técnica sólida, motivado por los retos y listo para crecer, ¡aquí estoy! ¡Hagamos algo increíble juntos!
            </p>
            <div className='flex flex-wrap gap-2'>
              <a 
                href="mailto:luis.salcedo0906@gmail.com"
                target='_blank'
                className='flex items-center gap-1 px-3 py-1 border-2 border-black bg-[#DAF5F0] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
                <MdOutlineMailOutline className='inline' /> Contáctame
              </a>
              <a 
                href="https://www.linkedin.com/in/luis-salcedo-406895245/"
                target='_blank'
                className='flex items-center gap-1 px-3 py-1 border-2 border-black bg-[#DAF5F0] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
                <FaLinkedinIn className='inline' /> LinkedIn
              </a>
              <a 
                href="https://github.com/Behelit0906"
                target='_blank'
                className='flex items-center gap-1 px-2 py-1 border-2 border-black bg-[#DAF5F0] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
                <FaGithub className='inline' /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default App
