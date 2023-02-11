import './ReporteVentas.scss'
const ReporteVentas = () => {

  return (
    <div className='reporteVentas'>
      <p className='reporteVentas__title'>Reporte Ventas Diarias</p>
      <h1 className='reporteVentas__subTitle'>Ventas por mesas</h1>
      <p className='reporteVentas__fecha'>fecha</p>

      <div className='reporteVentas__containerCards'>
        <div className='reporteVentas__cards'>
          <h3>mesa</h3>
          <h3>$800.000</h3>
        </div>
      </div>
        <div className='reporteVentas__cardsTotal'>
          <h3>Total</h3>
          <h3>800.000</h3>
        </div>
      <button className='reporteVentas__btnTotal'>
        <span>Total Ventas</span>
        <span>$800.000</span>
      </button>
    </div>
  )
}

export default ReporteVentas