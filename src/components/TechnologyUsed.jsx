import React from 'react'

const TechnologyUsed = ({name}) => {
  return (
    <div className='flex items-center justify-center w-fit h-fit px-3 rounded-full bg-green-950 border border-green-800'>
        <span className='text-[#5FE9B5] text-sm'>{name}</span>
    </div>
  )
}

export default TechnologyUsed
