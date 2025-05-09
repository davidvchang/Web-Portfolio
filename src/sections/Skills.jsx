import React from 'react'
import SkillsContainer from '../components/SkillsContainer'
import Skill from '../components/Skill'
import {ReactIcon, Vue, HTML5, CSS, Sass, TailwindCSS, Bootstrap, Nodejs, Expressjs, PostgreSQL, MicrosoftSQLServer, MySQL, MongoDB, JavaScript, TypeScript, Python, CSharp, Git, GitHub, Postman, SourceTree} from '../assets/icons/SkillsIcons'

const Skills = () => {
  return (
    <section className='flex flex-col items-center py-20 gap-10' id='skills'>
        <span className='text-4xl font-semibold'>Mis Habilidades</span>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-center'>
            <SkillsContainer text='Frontend' children={
                <>
                    <Skill name='React.js' icon={<ReactIcon className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='Vue.js' icon={<Vue className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='HTML' icon={<HTML5 className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='CSS' icon={<CSS className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='SASS' icon={<Sass className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='Tailwind' icon={<TailwindCSS className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='Bootstrap' icon={<Bootstrap className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                </>
            }/>
            <SkillsContainer text='Backend' children={
                <>
                    <Skill name='Node.js' icon={<Nodejs className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='Express.js' icon={<Expressjs className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                </>
            }/>
            <SkillsContainer text='Base de Datos' children={
                <>
                    <Skill name='PostgreSQL' icon={<PostgreSQL className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='MongoDB' icon={<MongoDB className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='SQL Server' icon={<MicrosoftSQLServer className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='MySQL' icon={<MySQL className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                </>
            }/>

            <SkillsContainer text='Lenguajes de Programación' children={
                <>
                    <Skill name='JavaScript' icon={<JavaScript className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='TypeScript' icon={<TypeScript className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='Python' icon={<Python className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='C#' icon={<CSharp className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                </>
            }/>

            <SkillsContainer text='Otros' children={
                <>
                    <Skill name='Git' icon={<Git className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='GitHub' icon={<GitHub className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='Postman' icon={<Postman className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                    <Skill name='SourceTree' icon={<SourceTree className="w-8 h-8 group-hover:scale-105 group-hover:transition group-hover:duration-300"/>}/>
                </>
            }/>
        </div>
      
    </section>
  )
}

export default Skills
