import React from 'react'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import { Logo } from '../../img'

import './Home.scss'


const Home = () => {
  return (
    <div className='home'>
      <img className='home__logo' src={Logo} alt="" />
      <Login/>
      {/* <Register /> */}
    </div>
  )
}

export default Home