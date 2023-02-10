import React, { useContext, useState } from 'react'
import {  UserDispatcherContext } from '../../context/UserContext'
import { OrdersTables } from '../../types/interfaces'

interface Props {
  order: OrdersTables,
  state:boolean
}


const CantidadItem = ({ order,state }: Props) => {
  const { setOrders } = useContext(UserDispatcherContext)
  const [count, setCount] = useState<number>(order.count)


  const editOrder = (order: OrdersTables, e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value);
    if (isNaN(count) ) {
      setCount(0);
      order.count = 0;
    } else {
      setCount(count);
      setOrders(prevOrders =>
        prevOrders.map(prevOrder => {
          if (prevOrder === order) {
            console.log(prevOrder.count)
            return { ...prevOrder, count: count };
          }
          return prevOrder;
        })
      );
    }
  };






  return (
    <input className='pedidosComanda__cant' disabled={state} onChange={(e) => editOrder(order, e)} minLength={12} type="number" name="" id="" value={count} />

  )
}

export default CantidadItem