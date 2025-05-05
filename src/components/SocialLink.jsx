import React from 'react'

const SocialLink = ({icon, link}) => {
  return (
    <a href={link} target='_blank' className='w-fit h-fit flex items-center justify-center border p-2 rounded-full border-slate-700 hover:border-principal-color hover:transition duration-300'>
        {icon}
    </a>
  )
}

export default SocialLink
