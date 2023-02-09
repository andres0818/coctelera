import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'

import './Router.scss'
import Coktails from './page/coktails/Coktails'
import PedidosComanda from './PedidosComanda/PedidosComanda'
import Factura from './Factura/Factura'
import ReporteVentas from './ReporteVentas/ReporteVentas'
import Mesas from './RealizarPedidos/Mesas'

const Rotuer = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/cocktails' element={<Coktails />} >
                <Route path='/cocktails' element={<Mesas />} />
                <Route path='/cocktails/:cocktailsId' element={<h1>Estamos en la mesa</h1>} />
                <Route path='/cocktails/pedidosComanda' element={<PedidosComanda />} />
                <Route path='/cocktails/factura' element={<Factura />} />
                <Route path='/cocktails/reporteVentas' element={<ReporteVentas />} />
            </Route>

            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default Rotuer