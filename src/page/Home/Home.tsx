import React, { useContext, } from 'react'
import { UserContext } from '../../components/context/UserContext'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import { Logo } from '../../img'

import './Home.scss'


const Home = () => {

  const {homeState} =useContext(UserContext)

  return (
    <div className='home'>
      <img className='home__logo' src={Logo} alt="" />
      {
        homeState===false ? <Login  /> : <Register />
      }


    </div>
  )
}

export default Home