import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import AddCocktail from '../../components/AddCocktail/AddCocktail'
import { auth } from '../../components/api/firebase'
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import { ImgIcon } from '../../img'
import './Admin.scss'


const Admin = () => {

    /*     const { statusLogin } = useContext(UserContext)
        const { navigate } = useContext(UserDispatcherContext)
    
    
        if (statusLogin === null) {
            navigate('/')
        }
        else if (statusLogin.email !== "admin@admin.adm") {
            auth.signOut()
        }
     */

    return (
        <div className='admin'>
            <div className='admin__navContainer'>
                <NavAdmin />
            </div>
            <div className='admin__container'>
                <Outlet />
            </div>
        </div>
    )
}

export default Admin