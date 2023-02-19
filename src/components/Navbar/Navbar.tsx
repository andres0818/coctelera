import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { auth } from '../api/firebase'
import './Navbar.scss'

const Navbar = () => {

  const [display, setDisplay] = useState<string>('none')

  const navigate: NavigateFunction = useNavigate()

  const handlerFocus = () => {
    const button = document.querySelector('.navbar__list') as HTMLButtonElement;
    setDisplay(button.style.display)

    if (display === 'none') {
      button.style.display = 'block';
      setDisplay('block');
    }
    else {
      button.style.display = 'none';
      setDisplay('none')
    }
  };


  const handlerNavigate = (e: any) => {
    const button = document.querySelector('.navbar__list') as HTMLButtonElement;
    button.style.display = 'none';
    setDisplay('none')
    navigate(`${e}`)

  }

  return (
    <nav className='navbar'>

      <button onClick={handlerFocus} className='navbar__button'>
        <div></div>
        <div></div>
        <div></div>
      </button>

      <ul className='navbar__list'>
        <li onClick={() => handlerNavigate('')} >Mesas</li>
        <li onClick={() => handlerNavigate('pedidosComanda')} >Pedidos (Comanda)</li>
        <li onClick={() => handlerNavigate('factura')} >Factura</li>
        <li onClick={() => handlerNavigate('reporteVentas')} >Reporte Ventas Diarias</li>
      </ul>
      <button onClick={()=>auth.signOut() } className='navbar__exit'>Salir</button>
    </nav>
  )
}

export default Navbar