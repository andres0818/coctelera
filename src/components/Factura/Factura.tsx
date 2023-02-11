import { useContext, useEffect, useState } from 'react'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import './Factura.scss'
import FacturaCards from './FacturaCards'


const Factura = () => {

  const [accumulator, setAccumulator] = useState<number>(0)
  const { orders, nameTable, dailySale } = useContext(UserContext)
  const { setOrders, setDailySale, navigate } = useContext(UserDispatcherContext)

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
    setDailySale([
      ...dailySale,
      {
        table: nameTable,
        total: accumulator,
      }
    ])
    setOrders(deleteOrder)
    navigate('/cocktails/reporteVentas')

  }
  useEffect(
    () => console.log(dailySale), [dailySale]
  )

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