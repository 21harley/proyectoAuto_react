import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { creteUserFire } from './../../services/firebase/functionFire'

function Register () {
  const initMessage= { state: false, type: '', mess: '' }
  const [message, setMessage] = useState(initMessage)

  const event = (e) => {
    e.preventDefault()
    const { username, email, password } = e.target

    creteUserFire({ type: 'EmailAndPassword', email: email.value, pass: password.value })
      .then((resul) => {
          console.log(resul);
          // console.log(resul?.user.uid)
      })
        .catch((error) => {
          console.log(error)
      })
      // console.log(username.value, email.value, password.value)

    e.target.reset()
  }

  return (
    <div className='container' >
        <div className='container__register'>
            <div >
                <h1 >Register</h1>
            </div>
            <form className='form__register' action=""  onSubmit={(e) => { event(e) }}>
              <div className='container__grid'>
                <label htmlFor="username" >username</label>
                <input type="text" name='username' required/>
              </div>
              <div className='container__grid'>
                <label htmlFor="email" >email</label>
                <input  type="email" name='email' required/>
              </div>
              <div className='container__grid'>
                <label htmlFor="password" >password</label>
                <input  type="password" name='password' required/>
              </div>
                <button className='button' >Register</button>
            </form>
            <div >
                <p >Already registered?</p><Link  to="/login">Log In</Link>
            </div>
        </div>
    </div>
  )
}

export default Register