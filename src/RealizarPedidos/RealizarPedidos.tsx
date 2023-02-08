import React from 'react'
import { mesa } from '../img'
import './RealizarPedidos.scss'

const RealizarPedidos = () => {

  const tables = [1, 2, 3, 4, 5, 6]

  return (
    <div className='RealizarPedidos'>
      <h1 className='RealizarPedidos__title'>Cocktails</h1>
      <div className='RealizarPedidos__container' >
        {
          tables.map((e, i) => {
            return (
              <div className='RealizarPedidos__card' key={i}>

                <input type="checkbox" id={`checkbox${e}`} />
                <label htmlFor={`checkbox${e}`} ></label>

                <div className='contenedor'>
                  <img className='RealizarPedidos__img' src={mesa} alt="mesa" />
                  <p>{e}</p>
                </div>
              </div>
            )

          })
        }
      </div>
    </div>
  )
}

export default RealizarPedidos