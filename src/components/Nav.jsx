import React from 'react'

const Nav = ({link, text}) => {
  return (
    <a href={link} className='hover:text-principal-color hover:transition duration-300'>{text}</a>
  )
}

export default Nav
