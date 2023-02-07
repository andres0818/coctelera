import React from 'react'
import Register from '../../components/Register/Register'
import { Logo } from '../../img'

import './Login.scss'


const Login = () => {
  return (
    <div className='login'>
      <img className='login__logo' src={Logo} alt="" />
      <Register />
    </div>
  )
}

export default Login