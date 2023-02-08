import React from 'react'
import { Outlet } from 'react-router-dom'
import Nabvar from '../../components/Navbar/Navbar'
import './Cocktails.scss'

const Coktails = () => {
  return (
    <div className='cocktails'>
      <Nabvar />
      <Outlet />
    </div>
  )
}

export default Coktails