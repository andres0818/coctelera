import { Route, Routes } from 'react-router-dom'
import Login from './page/Login/Login'

import './App.scss'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' />
        </Routes>
    )
}

export default App