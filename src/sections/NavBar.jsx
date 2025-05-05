import React from 'react'
import Nav from '../components/Nav'

const NavBar = () => {
  return (
    <section className='fixed top-0 left-0 z-50 bg-background-dark w-full h-14 px-20 flex items-center justify-between border-b border-b-slate-800 shadow'>
        <span className='text-4xl font-semibold text-principal-color'>DV</span>

        <div className='flex items-center gap-10 text-white'>
          <Nav link="" text="Inicio"/>
          <Nav link="" text="Proyectos"/>
          <Nav link="" text="Habilidades"/>
          <Nav link="" text="Experiencia"/>
          <Nav link="" text="Contactame"/>
        </div>
    </section>
  )
}

export default NavBar
