import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../Login/Login'
import Base from '../Base/Base'

function Home(){
  const { user,login_sucess } = useSelector((state) => state.reducerAll.User);
  //const dispatch = useDispatch()

  return (
    <>
    {
      (login_sucess)
        ? (
        <div>
          <Navbar></Navbar>
          <div className='container'>
          <Base/>
          </div>
        </div>

          )
        : <Login/>
    }

    </>
  )
}

export default Home