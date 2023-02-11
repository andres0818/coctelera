import { useContext, useEffect, useState } from 'react'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import './ReporteVentas.scss'


const ReporteVentas = () => {

  const { dailySale } = useContext(UserContext)
  const [accumulator, setAccumulator] = useState<number>(0)
  const { setDailySale } = useContext(UserDispatcherContext)


  useEffect(() => {
    let conta = 0

    dailySale.forEach(order => {
      conta += order.total
    })

    setAccumulator(conta)

  }, [dailySale])


  return (
    <div className='reporteVentas'>
      <p className='reporteVentas__title'>Reporte Ventas Diarias</p>
      <h1 className='reporteVentas__subTitle'>Ventas por mesas</h1>
      <p className='reporteVentas__fecha'>fecha</p>

      <div className='reporteVentas__containerCards'>
        {
          dailySale.map((item, index) => {
            return (

              <div key={index} className='reporteVentas__cards'>
                <h3>{item.table}</h3>
                <h3>${item.total}.000</h3>
              </div>

            )
          })
        }

      </div>
      <div className='reporteVentas__cardsTotal'>
        <h3>Total</h3>
        <h3>${accumulator}.000</h3>
      </div>
      <button onClick={()=>setDailySale([])} className='reporteVentas__btnTotal'>
        <span>Total Ventas</span>
        <span>${accumulator}.000</span>
      </button>
    </div>
  )
}

export default ReporteVentas