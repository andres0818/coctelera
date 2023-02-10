import React, { useContext, useState } from 'react'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import { pencil } from '../../img'
import CantidadItem from './CantidadItem'
import './PedidosComanda.scss'

const PedidosComanda = () => {
  const { nameTable, orders } = useContext(UserContext)
  const { navigate}=useContext(UserDispatcherContext)
  const [state, setState] = useState<boolean>(true)

  const newOrder = orders.filter(order => order.table === nameTable)

  return (
    <div className='pedidosComanda'>
      <p className='pedidosComanda__title'>Pedidos (comanda)</p>
      <h1 className='pedidosComanda__subTitle'>{nameTable}</h1>
      <div className='pedidosComanda__info'>
        <h1 className='pedidosComanda__textInfo'>Cant</h1>
        <h1 className='pedidosComanda__textInfo'>Producto</h1>
      </div>
      <div className='pedidosComanda__containerInfo'>
        {
          newOrder.map(order => (
            <div className='pedidosComanda__nameCantContainer' key={order.id}>
              <CantidadItem order={order} state={state} />
              <p className='pedidosComanda__name'>{order.name}</p>
            </div>
          ))
        }
      </div>
      <div className='pedidosComanda__options'>
        <img className='pedidosComanda__edit' onClick={() => state ? setState(false) : setState(true)} src={pencil} alt="Edit" />
        <button onClick={()=>navigate('/cocktails/factura')} className='pedidosComanda__send'>Enviar</button>
      </div>
    </div>

  )
}

export default PedidosComanda