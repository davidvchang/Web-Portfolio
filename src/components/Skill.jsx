import React from 'react'

const Skill = ({icon, name}) => {
  return (
    <div className='flex flex-col gap-1 group justify-center rounded-lg items-center p-3 bg-background-dark border border-slate-800 hover:border-principal-color/70 hover:transition duration-300'>
        {icon}
        <span className='text-slate-300 group-hover:text-white group-hover:transition group-hover:duration-300'>{name}</span>
    </div>
  )
}

export default Skill
