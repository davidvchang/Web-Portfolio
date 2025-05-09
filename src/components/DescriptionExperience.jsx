import React from 'react'
import { ChevronRight } from 'lucide-react';

const DescriptionExperience = ({description}) => {
  return (
    <div className='flex items-center gap-2'>
       <ChevronRight className='min-w-7 min-h-7 text-[#00D5BE]'/>
       <p className='text-[17px]'>{description}</p>
    </div>
  )
}

export default DescriptionExperience
