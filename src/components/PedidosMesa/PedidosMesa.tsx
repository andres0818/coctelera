import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { check } from '../../img'
import Cards from './cards'

import './PedidosMesa.scss'



const PedidosMesa: React.FC = () => {

  const { nameTable, dataCocktails } = useContext(UserContext)
  const [order, setOrder] = useState<object[]>([])


  return (
    <div className='pedidosMesa'>
      <h1>
        {nameTable}
      </h1>
      <div className='pedidosMesa__container'>
        {
          dataCocktails.map((e, i) => {

            return <Cards order={order} setOrder={setOrder} key={i} e={e} />

          })
        }
      </div>
        <img className='pedidosMesa__checkImg' src={check} alt="" />
      <footer className='pedidosMesa__footer'>
      </footer>
    </div>
  )
}

export default PedidosMesa