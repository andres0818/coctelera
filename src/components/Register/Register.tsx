import React, { useContext, useState } from 'react'
import { Email, Key, User } from '../../img'
import { UserDispatcherContext } from '../../context/UserContext'
import { INITIAL_STATE, userData } from '../../types'

import './Register.scss'

const Register = () => {
    const { setHomeState, createUser } = useContext(UserDispatcherContext)
    const [userData, setUserData] = useState<userData>(INITIAL_STATE)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUser(userData);
        setUserData(INITIAL_STATE);
        
    };

    return (
        <div className='register'>
            <h3 className='register__title'>¡Regístrate!</h3>
            <form onSubmit={handleSubmit} className='register__formContainer'>
                <div className='register__form'>
                    <img className='register__icon' src={User} alt="" />
                    <input
                        required
                        className='register__input'
                        name='name'
                        type="text"
                        placeholder="Usuario"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='register__form'>
                    <img src={User} alt="" />
                    <input
                        required
                        className='register__input'
                        name='userName'
                        type="text"
                        placeholder="Nombre Completo"
                        value={userData.userName}
                        onChange={handleChange}
                    />
                </div>
                <div className='register__form'>
                    <img src={Email} alt="" />
                    <input
                        required
                        className='register__input'
                        name='email'
                        type="email"
                        placeholder="Correo Electronico"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='register__form'>
                    <img src={Key} alt="" />
                    <input
                        required
                        className='register__input'
                        name='password'
                        type="password"
                        placeholder="Contraseña"
                        value={userData.password}
                        onChange={handleChange}
                        minLength={6}
                        maxLength={6}
                    />
                </div>
                <button className='register__submit' type="submit">
                    Registrarse
                </button>
            </form>
            <p className='register__question'>¿Ya tienes cuenta?
                <button onClick={() => setHomeState(false)} className='register__quiestionBtn'>Inicia Sesión</button>
            </p>
        </div>
    )
}

export default Register
