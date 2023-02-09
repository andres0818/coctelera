import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'

import './PedidosMesa.scss'



const PedidosMesa: React.FC = () => {
  const { nameTable, dataCocktails } = useContext(UserContext)
  const [count, setCount] = useState<number>(0)


  const add = () => setCount(count + 1)
  const sub = () => count > 0 && setCount(count - 1)

  return (
    <div className='pedidosMesa'>
      <h1>
        {nameTable}
      </h1>
      <div>
        {
          dataCocktails.map((e) => {
            console.log(e);
            return (
              <div key={e.strDrinkThumb} className='Mesas__card'>
                <div className='pedidosMesa__checkboxContainer Mesas__checkboxContainer'>
                  <input className='Mesas__input' type='checkbox' name='' id='checkbox' />
                  <label className='Mesas__label' htmlFor='checkbox'></label>
                  <img className='Mesas__img' src={e.strDrinkThumb} alt='imagen' />
                  <p className='pedidosMesa__name'>{e.strDrink}</p>
                  <div className='pedidosMesa__operations'>
                    <button className='pedidosMesa__btn' onClick={add}>+</button>
                    <span className='pedidosMesa__count'>{count}</span>
                    <button className='pedidosMesa__btn' onClick={sub}>-</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PedidosMesa