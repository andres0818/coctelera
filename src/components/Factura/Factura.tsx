import { useContext, useEffect, useState } from 'react'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import './Factura.scss'
import FacturaCards from './FacturaCards'


const Factura = () => {

  const [accumulator, setAccumulator] = useState<number>(0)
  const { orders, nameTable, occupiedTables } = useContext(UserContext)
  const { setOrders } = useContext(UserDispatcherContext)

  const newOrder = orders.filter(order => order.table === nameTable)
  const deleteOrder = orders.filter(order => order.table !== nameTable)

  useEffect(() => {
    let conta = 0

    newOrder.forEach(order => {
      conta += (order.count * order.price)
    })

    setAccumulator(conta)

  }, [newOrder])

  const payAcount = () => {
    const newFilterOccupied= occupiedTables

    const idTable= ``

    const table = document.getElementById(``)
    console.log(`checkbox-`, occupiedTables)
    setOrders(deleteOrder)

  }

  return (
    <div className='factura'>
      <p className='factura__title'>Factura</p>
      <h1 className='factura__subtitle'>Factura {nameTable}</h1>
      <div className='factura__cardsContainer'>

        {
          newOrder.map(order => {

            return (

              <FacturaCards key={order.id} order={order} />

            )
          })
        }



      </div>
      <div onClick={payAcount} className='factura__total'>
        <span>PAGAR</span>
        <span>${accumulator}.000</span>
      </div>
    </div>
  )
}

export default Factura