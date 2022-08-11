import React from 'react'
import { useNavigate } from 'react-router-dom'
//import { useDispatch } from 'react-redux'
import { closetSession } from '../../services/firebase/functionFire'

const Navbar = () => {
  //const dispatch = useDispatch()
  const navigate = useNavigate()
  const routerApp = (ruta) => {
    if (ruta === '/login') {
      closetSession()
    }
    navigate(ruta)
  }

  return (
      <>
        <nav className='header-nav'>
             <ul className='header-nav__ul'>
                 <li className='header-nav__li' >
                     <button className='button--closet'  onClick={() => { routerApp('/login') }}>Closet </button>
                 </li>
             </ul>
        </nav>
    </>
  )
}

export default Navbar