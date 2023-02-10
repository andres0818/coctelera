import React, { useContext } from 'react'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import { check } from '../../img'
import Cards from './Cards'

import './PedidosMesa.scss'



const PedidosMesa: React.FC = () => {

  const { nameTable, dataCocktails } = useContext(UserContext)
  const { navigate } = useContext(UserDispatcherContext)


  return (
    <>
      <div className='pedidosMesa'>
        <p className='pedidosMesa__title'>Realizar Pedidos</p>
        <h1 className='pedidosMesa__subTitle'>
          {nameTable}
        </h1>
        <div className='pedidosMesa__container'>
          {
            dataCocktails.map((e, i) => {

              return <Cards key={i} e={e} />

            })
          }
        </div>
        <img onClick={() => navigate('/cocktails/listProducts')} className='pedidosMesa__checkImg' src={check} alt="" />
        <footer className='pedidosMesa__footer'>
        </footer>
      </div>
    </>
  )
}

export default PedidosMesa