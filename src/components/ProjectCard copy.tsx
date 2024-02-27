import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

interface Props {
  name: string,
  img: string,
  description: string,
  previewLink?: string,
  repoLink?: string,
  technologies: {
    icon: ReactNode
    name: string,
  }[]
}

function ProjectCard ({name, img, description, previewLink, repoLink, technologies}: Props) {
  return (
    <article className="flex flex-col gap-3 md:flex-row md:gap-7 py-5 pl-3 pr-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <h3 className="text-lg font-bold md:hidden">
        {name}
      </h3>
      <div className="w-full h-[220px] md:w-[1000px] md:h-[260px] shadow-[8px_8px_0px_rgba(0,0,0,1)]" style={{
        backgroundImage: `url('${img}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>

      </div>
      <div>
        <h3 className="hidden md:block text-lg font-bold">
          {name}
        </h3>
        <div className='flex flex-wrap gap-2 mb-3 mt-3'>
          {
            technologies.map(technology => 
              <span key={technology.name} className="className='flex items-center gap-1 bg-[#FDFD96] w-fit px-2 py-[2px] border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)]'">
                { technology.icon } { technology.name }
              </span>
            )
          }
        </div>
        <div className="text-balance mb-7">
          {description}
        </div>
        <div className='flex flex-wrap gap-3'>
          {
            repoLink && 
            <a className='flex items-center gap-1 bg-[#FCDFFF] px-2 py-1 border-2 border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]' 
            href={repoLink}>
              <FaGithub className='inline' /> Code
            </a>
          }
          {
            previewLink &&
            <a className='flex items-center gap-1 bg-[#FCDFFF] px-2 py-1 border-2 border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)]' 
            href={repoLink}>
              <VscPreview className='inline' /> Preview
            </a>
          }
        </div>
      </div>       
    </article>
  )
}

export default ProjectCard;