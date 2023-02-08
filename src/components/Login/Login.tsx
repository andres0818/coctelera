import React from 'react'
import { User } from '../../img'

import './Login.scss'

const Login = () => {
    return (
        <div className='login'>
            <h3 className='login__title'>Iniciar Sesión</h3>
            <form >
                <div className='login__form'>
                    <img className='login__icon' src={User} alt="" />
                    <input className='login__input' type="text" placeholder="Usuario" />
                </div>
                <div className='login__form'>
                    <img src={User} alt="" />
                    <input className='login__input' type="text" placeholder="Nombre Completo" />
                </div>
                <button className='login__submit' type="submit">
                    Iniciar sesión
                </button>
            </form>
            <p className='login__question'>Aún no tienes cuenta?
                <button className='login__quiestionBtn'>Registrate</button>
            </p>
        </div>
    )
}

export default Login