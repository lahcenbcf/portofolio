import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faLink, faUser} from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div className='navbar h-12 w-64 border rounded-md flex flex-row justify-around items-center'>
     <FontAwesomeIcon icon={faHome} className='text-blue-700 hover:text-black'/>
     <FontAwesomeIcon icon={faUser} className='text-blue-700 hover:text-black' />
     <FontAwesomeIcon icon={faLink} className='text-blue-700 hover:text-black' />
    </div>
  )
}

export default Navbar
