import { useState } from "react"

const ProjectCard = ({image, children2, title, description, children}) => {
const [visibility, setVisibility] = useState(false)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <div className='w-full md:w-[408px] h-full border overflow-hidden bg-white/5 backdrop-blur-xl rounded-lg border-white/10 hover:border-teal-400/50 hover:transition duration-300'>
        <div className=' w-full md:w-[408px] h-52 relative overflow-hidden' onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
            <img src={image} alt="Project Image"  className='w-full h-full object-cover'/>

            <div className={`absolute top-0 w-full h-full backdrop-blur-xs flex items-end p-5 justify-between transition-all duration-300 ease-in-out ${visibility ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                {children2}
            </div>
        </div>

        <div className='p-5 w-full flex flex-col items-center gap-5'>
            <span className='text-2xl font-medium text-center'>{title}</span>
            <p className='text-slate-300 text-ellipsis line-clamp-3'>{description}</p>

            <div className='flex flex-wrap gap-2 justify-center'>
                {children}
            </div>
        </div>

      
    </div>
  )
}

export default ProjectCard
