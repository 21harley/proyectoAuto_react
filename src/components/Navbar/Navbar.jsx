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
        <div>
             <ul >
                 <li>
                     <button onClick={() => { routerApp('/home') }}>home </button>
                 </li>
                 <li>
                     <button onClick={() => { routerApp('/login') }}>Closet </button>
                 </li>
             </ul>
        </div>
    </>
  )
}

export default Navbar