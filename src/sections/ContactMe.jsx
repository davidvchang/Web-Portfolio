import React from 'react'
import { Mail, Linkedin, Github, MapPin, Instagram, Twitter } from 'lucide-react';
import ContactMeCard from '../components/ContactMeCard';
import SocialNetworkButton from '../components/SocialNetworkButton';

const ContactMe = () => {
  return (
    <section className='flex flex-col w-full text-white gap-16 pt-10' id='contactme'>
      <span className='text-4xl text-center'>Contactame</span>

        <div className='flex flex-col gap-10 items-center pb-10'>
            <span className='text-[17px] flex justify-center'>Puedes contactarme a traves de los siguientes medios de comunicación.</span>
            
            <div className='flex flex-wrap w-full gap-3 justify-center'>

                <ContactMeCard link='mailto:dvalenzuelachang@gmail.com' icon={<Mail className='w-[30px] h-[30px]' strokeWidth={1.5}/>} text='dvalenzuelachang@gmail.com'/>
                <ContactMeCard link='https://www.linkedin.com/in/davidvalenzuelac/' icon={<Linkedin className='w-[30px] h-[30px]' strokeWidth={1.5}/>} text='@davidvalenzuelac'/>
                <ContactMeCard link='https://github.com/davidvchang' icon={<Github className='w-[30px] h-[30px]' strokeWidth={1.5}/>} text='@davidvchang'/>
                
                <div className='flex flex-col items-center bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors select-none'>
                    <MapPin className='w-[30px] h-[30px]' strokeWidth={1.5}/>
                    <span className='text-[17px] font-light'>Guamuchil, Sinaloa, México</span>
                </div>
            </div>

            <span className='text-[17px] text-center'>Otras redes sociales</span>

            <div className='flex gap-5'>    
                <SocialNetworkButton link="https://www.instagram.com/_davidvalenzuelac" icon={<Instagram className='w-5 h-5'/>} />
                <SocialNetworkButton link="https://x.com/DavidChangDev/" icon={<Twitter className='w-5 h-5'/>} />
            </div>
      </div>
    </section>
  )
}

export default ContactMe
