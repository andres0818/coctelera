import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'

import './Router.scss'
import Coktails from './page/coktails/Coktails'
import RealizarPedidos from './RealizarPedidos/RealizarPedidos'
import PedidosComanda from './PedidosComanda/PedidosComanda'
import Factura from './Factura/Factura'
import ReporteVentas from './ReporteVentas/ReporteVentas'

const Rotuer = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />

            <Route path='/cocktails' element={<Coktails />} >
                <Route path='/cocktails' element={<RealizarPedidos />} />
                <Route path='/cocktails/pedidosComanda' element={<PedidosComanda />} />
                <Route path='/cocktails/factura' element={<Factura />} />
                <Route path='/cocktails/reporteVentas' element={<ReporteVentas />} />
            </Route>

            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default Rotuer