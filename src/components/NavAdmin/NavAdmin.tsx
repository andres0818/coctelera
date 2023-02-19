import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../api/firebase'
import './NavAdmin.scss'

const NavAdmin = () => {
    return (
        <div className='navAdmin'>
            <Link className='navAdmin__button' to='/admin'>Add cocktel</Link>
            <Link className='navAdmin__button' to='/admin/list'>Cockteles</Link>
            <button onClick={()=>auth.signOut() } className='navAdmin__exit'>Salir</button>
        </div>
    )
}

export default NavAdmin