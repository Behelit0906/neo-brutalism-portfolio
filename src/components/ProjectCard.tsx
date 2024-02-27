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
    <article className="flex flex-col gap-3 md:flex-row md:gap-7 py-7 pl-3 pr-4 md border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <h3 className="text-lg font-bold md:hidden">
        {name}
      </h3>
      <div className="hidden md:block md:w-[40%] shadow-[8px_8px_0px_rgba(0,0,0,1)]" style={{
        backgroundImage: `url('${img}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
      </div>
      <div className="h-72 md:hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]" style={{
        backgroundImage: `url('${img}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}></div>
      <div className="relative md:w-[60%]">
        <h3 className="hidden md:block text-lg font-bold">
          {name}
        </h3>
        <div className='flex flex-wrap gap-2 mb-3 mt-3'>
          {
            technologies.map(technology => 
              <span key={technology.name} className="flex items-center gap-1 bg-[#FDFD96] w-fit px-2 py-1 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] text-xs">
                { technology.icon } { technology.name }
              </span>
            )
          }
        </div>
        <div className="text-balance mb-4 text-sm">
          {description}
        </div>
        <div className='relative top-[7.5px] flex flex-wrap gap-3'>
          {
            repoLink && 
            <a className='flex items-center gap-1 bg-[#FCDFFF] px-2 py-1 border-2 border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] text-sm' 
            href={repoLink} target="_blank">
              <FaGithub className='inline' /> Code
            </a>
          }
          {
            previewLink &&
            <a className='flex items-center gap-1 bg-[#FCDFFF] px-2 py-1 border-2 border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] text-sm' 
            href={previewLink} target="_blank">
              <VscPreview className='inline' /> Preview
            </a>
          }
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;