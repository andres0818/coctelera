import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'

import './App.scss'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' />
        </Routes>
    )
}

export default App