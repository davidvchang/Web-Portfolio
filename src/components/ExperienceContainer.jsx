import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import DescriptionExperience from './DescriptionExperience';
import { motion, AnimatePresence } from 'framer-motion'

const ExperienceContainer = ({position, company, time}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='w-full flex flex-col border border-slate-800 bg-white/5 backdrop-blur-xl p-5 rounded-lg gap-2 hover:border-principal-color/70 hover:transition duration-300'>
        <div className='w-full flex justify-between items-center '>
            <span className='text-2xl font-medium text-center'>{position}</span>

            <button onClick={toggleVisibility} className='w-fit h-fit p-2 rounded-lg bg-[#242a3a] border border-slate-800 hover:bg-principal-color/70 hover:transition duration-300 cursor-pointer'>
                <ChevronDown className={`w-7 h-7 text-white transition-transform duration-300 ${
                  isVisible ? "rotate-180" : ""}`}/>
            </button>
        </div>

        <div className='flex gap-2'>
            <span className='text-[#00D5BE]'>{company}</span>
            <span>•</span>
            <span className='text-slate-200'>{time}</span>
        </div>

        <AnimatePresence> 
          {isVisible === true && (
              <motion.div
              initial={{ opacity: 0, height: 0 }}
              exit={{ opacity: 0, height: 0 }}
              animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
          >
            <div className='flex flex-col pt-5 gap-2'>
                <DescriptionExperience description='Desarrollé aplicaciones web utilizando Vue.js, PHP, JavaScript, CSS y Bootstrap.'/>
                <DescriptionExperience description='Realicé mantenimiento y mejoras en las aplicaciones web según los requisitos de los clientes.'/>
                <DescriptionExperience description='Implementé nuevas funcionalidades y corregí errores en respuesta a feedback recibido.'/>
                <DescriptionExperience description='Colaboré con mi equipo para asegurar la correcta entrega y actualización del proyecto.'/>
            </div>

          </motion.div>
          )}

        </AnimatePresence>
    </div>
  )
}

export default ExperienceContainer
