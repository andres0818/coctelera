import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nabvar from '../../components/Navbar/Navbar'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import './Cocktails.scss'

const Coktails = () => {

  const { statusLogin } = useContext(UserContext)
  const { navigate } = useContext(UserDispatcherContext)


  if (statusLogin === null) {
    console.log('register failed')
    navigate('')
  }



  return (
    <div className='cocktails'>
      <Nabvar />
      <Outlet />
    </div>
  )
}

export default Coktails