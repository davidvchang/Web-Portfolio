import React from 'react'
import ExperienceContainer from '../components/ExperienceContainer'

const Experience = () => {
  return (
    <section className='w-full flex flex-col items-center py-20 gap-10' id='experience'>
        <div className='w-[60%] flex flex-col gap-10'>
            <span className='text-4xl font-semibold text-center'>Mi Experiencia</span>

            <div className='flex flex-col w-full gap-5'>
                <ExperienceContainer position="Desarrollador Web" company="Clever Cloud" time="Julio 2024 - Enero 2025"/>
            </div>
        </div>
    </section>
  )
}

export default Experience
