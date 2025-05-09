import React from 'react'
import ProjectCard from '../components/ProjectCard'
import BtnActionsProject from '../components/BtnActionsProject'
import TechnologyUsed from '../components/TechnologyUsed'
import { Github } from 'lucide-react'

import Joinly from '../assets/img/covers/Joinly/Home.webp'
import BlogSpace from '../assets/img/covers/BlogSpace/BlogSpace.webp'
import LibrarySystem from '../assets/img/covers/Library-System/Library-System.webp'
import Ecommerce from '../assets/img/covers/Ecommerce/Ecommerce.webp'

const Projects = () => {
  return (
    <section className='flex flex-col items-center py-20 gap-10' id='projects'>
        <span className='text-4xl font-semibold'>My Projects</span>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center'>
            <ProjectCard image={Joinly} title="Joinly" description="Sistema de eventos donde puedes ver todos los eventos disponibles para unirte, al registrarte e iniciar sesión, puedes crear tus propios eventos, eliminar y editar los eventos previamente creados." 
                
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

            <ProjectCard image={BlogSpace} title="BlogSpace" description="Página en la cuál puedes ver todos los blogs que los usuarios han agregado, como también puedes registrarte, iniciar sesión y poder crear tus propio blogs, eliminar o editar los blogs ya creados y comentar otros blogs." 
                
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
                        <BtnActionsProject link="https://github.com/davidvchang/BlogSpace" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        {/* <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/> */}
                    </>
                }
            />

            <ProjectCard image={LibrarySystem} title="Sistema para Biblioteca" description="Sistema fullstack para una biblioteca en la cual permita prestar libros, así como agregar nuevos libros, poder editar, eliminar cada libro, registrar a clientes, etc." 
                
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
                        <BtnActionsProject link="https://github.com/davidvchang/Sistema-para-biblioteca" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        {/* <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/> */}
                    </>
                }
            />

            <ProjectCard image={Ecommerce} title="TechQuality Ecommerce" description="Ecommerce para una tienda ficticia de tecnologia. Permite registrarse, iniciar sesón, agregar productos al carrito y comprar por medio de mercado pago." 
                
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
                        <BtnActionsProject link="https://github.com/davidvchang/TechQuality---Ecommerce" icon={<Github className='text-white w-5 h-5'/>} text="Ver repositorio"/>
                        {/* <BtnActionsProjects link="https://pelis-dev.netlify.app/" icon={<Link className='text-white w-5 h-5'/>} text="Live Demo"/> */}
                    </>
                }
            />
        </div>
    </section>
  )
}

export default Projects
