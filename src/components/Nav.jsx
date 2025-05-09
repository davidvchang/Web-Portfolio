import React from 'react'

const Nav = ({onClick, text}) => {
  return (
    <button className='hover:text-principal-color hover:transition duration-300 cursor-pointer' onClick={onClick}>{text}</button>
  )
}

export default Nav
