import React from 'react'
import { ChevronDown } from 'lucide-react';

const ExperienceContainer = ({position, company, time}) => {
  return (
    <div className='w-full flex flex-col border border-slate-800 bg-white/5 backdrop-blur-xl p-5 rounded-lg gap-2 hover:border-principal-color/70 hover:transition duration-300'>
        <div className='w-full flex justify-between items-center '>
            <span className='text-2xl font-medium text-center'>{position}</span>

            <button className='w-fit h-fit p-2 rounded-lg bg-[#242a3a] border border-slate-800 hover:bg-principal-color/70 hover:transition duration-300 cursor-pointer'>
                <ChevronDown className='w-7 h-7'/>
            </button>
        </div>

        <div className='flex gap-2'>
            <span className='text-[#00D5BE]'>{company}</span>
            <span>•</span>
            <span className='text-slate-200'>{time}</span>
        </div>
    </div>
  )
}

export default ExperienceContainer
