import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from './../../reducers/slices/User'
import { loginUser } from './../../services/firebase/functionFire'

function Login () {
  const initMessage= { state: false, type: '', mess: '' }
  const [message, setMessage] = useState(initMessage)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const event = (e) => {
    e.preventDefault()

    const { email, password } = e.target

      loginUser({ type: 'EmailAndPassword', email: email.value, pass: password.value })
        .then((result) => {
          dispatch(login({ user: result?.user.uid }))
          navigate('/home');
        })
        .catch((error) => {
          console.log(error)
          /*
          setMessage({
            state: true,
            type: 'error',
            mess: 'Wrong email o password'
          })
          */
        })
      // console.log(email.value, password.value)


    e.target.reset()
  }

  return (
    <div className='container' >
        <div className='container__login'>
            <div >
                <h1>Login</h1>
            </div>
            <form className='form__login' action=""  onSubmit={(e) => { event(e) }}>
                <div className='container__grid'>
                  <label htmlFor="email">email</label>
                <input  type="email" name='email' required/>
                </div>
                <div className='container__grid'>
                  <label htmlFor="password">password</label>
                  <input  type="password" name='password' required/>
                </div>
                <button >Login</button>
            </form>
            <div >
                <p>Forgot password?</p><Link to="/register">Register now</Link>
            </div>
        </div>
    </div>
  )
}

export default Login