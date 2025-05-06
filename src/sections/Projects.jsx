import React from 'react'
import ProjectCard from '../components/ProjectCard'
import BtnActionsProject from '../components/BtnActionsProject'
import TechnologyUsed from '../components/TechnologyUsed'
import { Github } from 'lucide-react'

import Joinly from '../assets/img/covers/Joinly/Home.webp'

const Projects = () => {
  return (
    <section className='flex flex-col items-center py-20 gap-10'>
        <span className='text-4xl font-semibold'>My Projects</span>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center'>
            <ProjectCard image={Joinly} title="Joinly" description="Event system where you can see available events, and if you log in you can add new events, join an available event, etc." 
                
                children={
                    <>
                        <TechnologyUsed name="React"/>
                        <TechnologyUsed name="TypeScript"/>
                        <TechnologyUsed name="Tailwind"/>
                        <TechnologyUsed name="Express.js"/>
                        <TechnologyUsed name="PostgreSQL"/>
                    </>
                }

                children2={
                    <>
                        <BtnActionsProject link="https://github.com/davidvchang/Joinly" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        {/* <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/> */}
                    </>
                }
            />
        </div>
    </section>
  )
}

export default Projects
