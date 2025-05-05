import React from 'react'

const NavBar = () => {
  return (
    <section className='fixed top-0 left-0 z-50 bg-background-dark w-full h-14 px-10 flex items-center justify-between border-b border-b-slate-800 shadow'>
        <span className='text-4xl font-semibold text-principal-color'>DV</span>

        <div className='flex items-center gap-10 text-white'>
            <a href="" className='hover:text-principal-color hover:transition duration-300'>Inicio</a>
            <a href="" className='hover:text-principal-color hover:transition duration-300'>Proyectos</a>
            <a href="" className='hover:text-principal-color hover:transition duration-300'>Habilidades</a>
            <a href="" className='hover:text-principal-color hover:transition duration-300'>Experiencia</a>
            <a href="" className='hover:text-principal-color hover:transition duration-300'>Contactame</a>
        </div>
    </section>
  )
}

export default NavBar
