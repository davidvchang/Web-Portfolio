import React from 'react'
import Profile_Photo from '../assets/img/Profile_Photo.webp'
import SocialLink from '../components/SocialLink'

import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <section className='flex flex-items w-full min-h-screen items-center justify-center'>
        <div className='w-[90%] flex items-center justify-around'>
            <div className='flex flex-col'>
                <span className='text-5xl font-light'>Hola, mi nombre es</span>
                <span className='text-7xl font-semibold text-principal-color typing-effect'>David Valenzuela</span>
                <span className='text-2xl text-slate-300 font-light'>Ing. en Sistemas Computacionales</span>

                <div className='flex pt-10 items-center gap-8'>
                    <a href="https://drive.google.com/file/d/1YAkwZtXxrJ_fO1OVyi9_shz-eEe8-XJK/view?usp=sharing" target='_blank' className='w-fit h-fit px-12 py-3 rounded-full font-medium bg-principal-color hover:bg-teal-600 hover:transition duration-300'>Ver CV</a>

                    <div className='flex items-center gap-5'>
                        <SocialLink link='https://github.com/davidvchang' icon={<Github className='w-5 h-5'/>}/>
                        <SocialLink link='https://www.linkedin.com/in/davidvalenzuelac/' icon={<Linkedin className='w-5 h-5'/>}/>
                        <SocialLink link='mailto:dvalenzuelachang@gmail.com' icon={<Mail className='w-5 h-5'/>}/>
                    </div>
                </div>

            </div>

            <div className='relative w-64 h-64 rounded-full overflow-hidden bg-slate-200 float-effect'>
                <img src={Profile_Photo} alt="" className='w-[21rem] h-[21rem] object-contain absolute -top-2 left-2'/>
            </div>
        </div>
    </section>
  )
}

export default Home
