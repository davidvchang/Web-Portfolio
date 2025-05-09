import React from 'react'

const ContactMeCard = ({link, icon, text}) => {
  return (
    <a href={link} target='_blank' className='flex flex-col items-center bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors'>
        {icon}
        <span className='text-[17px] font-light'>{text}</span>
    </a>
  )
}

export default ContactMeCard
