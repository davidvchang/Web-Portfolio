import React from 'react'

const SkillsContainer = ({text, children}) => {
  return (
    <div className='flex flex-col bg-white/5 backdrop-blur-xl p-5 gap-5 '>
        <span className='text-xl font-medium text-center'>{text}</span>

        <div className='grid grid-cols-3 gap-3'>
            {children}
        </div>
      
    </div>
  )
}

export default SkillsContainer
