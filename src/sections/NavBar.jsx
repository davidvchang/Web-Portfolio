import React, { useState } from 'react'
import Nav from '../components/Nav'
import { AlignJustify, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {

  const [visibilityMenu, setVisibilityMenu] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  const scrollToSectionMovil = (id) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
      setVisibilityMenu(!visibilityMenu)
    }
  }

  const toggleVisibilityMenu = () => {
    setVisibilityMenu(!visibilityMenu)
  }
  return (
    <section className='fixed top-0 left-0 z-99 bg-background-dark/50 backdrop-blur-xl w-full h-14 flex items-center justify-between border-b border-b-slate-800 shadow'>
        <div className=" w-full h-full px-5 lg:px-20 flex items-center justify-between">
          <span className='text-4xl font-semibold text-principal-color'>DV</span>

          <div className='w-fit hidden lg:flex items-center gap-10 text-white'>
            <Nav onClick={() => scrollToSection("home")} text="Inicio"/>
            <Nav onClick={() => scrollToSection("projects")} text="Proyectos"/>
            <Nav onClick={() => scrollToSection("skills")} text="Habilidades"/>
            <Nav onClick={() => scrollToSection("experience")} text="Experiencia"/>
            <Nav onClick={() => scrollToSection("contactme")} text="Contactame"/>
          </div>

          {/* NAVBAR MOVIL */}

          <button onClick={toggleVisibilityMenu} className="hover:text-teal-500 lg:hidden"> 
            {visibilityMenu === false ?  (
              <AlignJustify className="w-8 h-8 hover:text-teal-500"/> 

            ) : (
              <X className="w-8 h-8 hover:text-teal-500"/> 
            )}
          </button>

        </div>

        <AnimatePresence>
          {visibilityMenu && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            exit={{ opacity: 0, height: 0 }}
            animate={{ opacity: visibilityMenu ? 1 : 0, height: visibilityMenu ? "auto" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            >
              <div className="absolute top-16 left-0 z-50 bg-black/90 backdrop-blur-xl w-full">
                <div className='flex flex-col items-center w-full gap-10 py-10'>
                    <Nav onClick={() => scrollToSectionMovil("home")} text="Inicio"/>
                    <Nav onClick={() => scrollToSectionMovil("projects")} text="Proyectos"/>
                    <Nav onClick={() => scrollToSectionMovil("skills")} text="Habilidades"/>
                    <Nav onClick={() => scrollToSectionMovil("experience")} text="Experiencia"/>
                    <Nav onClick={() => scrollToSectionMovil("contactme")} text="Contactame"/>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
    </section>
  )
}

export default NavBar
