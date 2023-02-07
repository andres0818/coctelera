import React from 'react'
import { Email, Key, User } from '../../img'

import './Register.scss'


const Register = () => {
    return (
        <div className='register'>
            <h3 className='register__title'>¡Regístrate!</h3>
            <form className='register__formContainer'>
                <div className='register__form'>
                    <img className='register__icon' src={User} alt="" />
                    <input className='register__input' type="text" placeholder="Usuario" />
                </div>
                <div className='register__form'>
                    <img src={User} alt="" />
                    <input className='register__input' type="text" placeholder="Nombre Completo" />
                </div>
                <div className='register__form'>
                    <img src={Email} alt="" />
                    <input className='register__input' type="text" placeholder="Correo Electronico" />
                </div>
                <div className='register__form'>
                    <img src={Key} alt="" />
                    <input className='register__input' type="text" placeholder="Contraseña" />
                </div>
                <button className='register__submit' type="submit">
                    Registrarse
                </button>
            </form>
            <p className='register__question'>¿Ya tienes cuenta?
                <button className='register__quiestionBtn'>Inicia Sesión</button>
            </p>
        </div>
    )
}

export default Register