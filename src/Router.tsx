import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'

import './Router.scss'
import Coktails from './page/coktails/Coktails'
import PedidosComanda from './components/PedidosComanda/PedidosComanda'
import Factura from './components/Factura/Factura'
import ReporteVentas from './components/ReporteVentas/ReporteVentas'
import Mesas from './components/Mesas/Mesas'
import PedidosMesa from './components/PedidosMesa/PedidosMesa'
import Admin from './page/admin/Admin'

const Rotuer = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/cocktails' element={<Coktails />} >
                <Route path='/cocktails' element={<Mesas />} />
                <Route path='/cocktails/:cocktailsId' element={<PedidosMesa />} />
                <Route path='/cocktails/pedidosComanda' element={<PedidosComanda />} />
                <Route path='/cocktails/factura' element={<Factura />} />
                <Route path='/cocktails/reporteVentas' element={<ReporteVentas />} />
            </Route>
            
            <Route path='/admin' element={<Admin />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default Rotuer