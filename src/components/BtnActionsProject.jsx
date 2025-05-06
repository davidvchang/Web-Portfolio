import React from 'react'

const BtnActionsProject = ({link, icon, text}) => {
  return (
    <a href={link} target='_blank' className='flex gap-2 items-center text-sm w-fit h-fit px-3 py-2 rounded-full text-white border border-emerald-900 bg-emerald-950 hover:bg-teal-700 hover:transition duration-300 font-light'>
        {icon}
        <span>{text}</span>
    </a>
  )
}

export default BtnActionsProject
