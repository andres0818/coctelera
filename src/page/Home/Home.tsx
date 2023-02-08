import React, { useState } from 'react'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import { Logo } from '../../img'

import './Home.scss'


const Home = () => {

  const [homeState, setHomeState] = useState<Boolean>(true)

  return (
    <div className='home'>
      <img className='home__logo' src={Logo} alt="" />
      {
        homeState===false ? <Login setHomeState={setHomeState} /> : <Register setHomeState={setHomeState} />
      }


    </div>
  )
}

export default Home