import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'

import './App.scss'
import Coktails from './page/coktails/Coktails'

const App = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/cocktails' element={<Coktails />} >

            </Route>
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default App