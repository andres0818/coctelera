import React, { useEffect, useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

  const [display, setDisplay] = useState<string>('none')

  const navigate: NavigateFunction = useNavigate()

  const handlerFocus = () => {
    const button = document.querySelector('.nabvar__list') as HTMLButtonElement;
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
    const button = document.querySelector('.nabvar__list') as HTMLButtonElement;
    button.style.display = 'none';
    setDisplay('none')
    navigate(`${e}`)

  }

  return (
    <nav className='nabvar'>

      <button onClick={handlerFocus} className='nabvar__button'>
        <div></div>
        <div></div>
        <div></div>
      </button>

      <ul className='nabvar__list'>
        <li onClick={() => handlerNavigate('')} >Mesas</li>
        <li onClick={() => handlerNavigate('pedidosComanda')} >Pedidos (Comanda)</li>
        <li onClick={() => handlerNavigate('factura')} >Factura</li>
        <li onClick={() => handlerNavigate('reporteVentas')} >Reporte Ventas Diarias</li>
      </ul>
    </nav>
  )
}

export default Navbar