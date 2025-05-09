import React from 'react'

const SocialNetworkButton = ({link, icon}) => {
  return (
    <a href={link} target='_blank' className='flex justify-center items-center border border-slate-700 w-fit h-fit rounded-full p-2 hover:border-emerald-600 hover:transition duration-300 cursor-pointer'>
        {icon}
    </a>
  )
}

export default SocialNetworkButton
