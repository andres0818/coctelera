import React, { useContext, useState } from 'react'
import { Email, Key } from '../../img'
import { UserDispatcherContext } from '../../context/UserContext'

import './Login.scss'
import { INITIAL_LOGIN, userLogin } from '../../types'
import ModalAccount from '../ModalAccount/ModalAccount'


const Login = () => {

    const { setHomeState, loginUser } = useContext(UserDispatcherContext)
    const [userData, setUserData] = useState<userLogin>(INITIAL_LOGIN)
    const [accountModal, setAccountModal] = useState<boolean>(true)
    const loginSatate = () => setHomeState(true)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        loginUser(userData);
        setUserData(INITIAL_LOGIN);
    };
    return (
        <>
            {
                accountModal && <ModalAccount setAccountModal={setAccountModal} />
            }
            <div className='login'>
                <h3 className='login__title'>Iniciar Sesión</h3>
                <form onSubmit={handleSubmit} >
                    <div className='login__form'>
                        <img className='login__icon' src={Email} alt="" />
                        <input onChange={handleChange} className='login__input' name='email' type="text" placeholder="Correo" />
                    </div>
                    <div className='login__form'>
                        <img src={Key} alt="" />
                        <input onChange={handleChange} className='login__input' type="text" name='password' placeholder="Contraseña" />
                    </div>
                    <button className='login__submit' type="submit">
                        Iniciar sesión
                    </button>
                </form>
                <p className='login__question'>Aún no tienes cuenta?
                    <button onClick={() => loginSatate()} className='login__quiestionBtn'>Registrate</button>
                </p>
            </div>
        </>
    )
}

export default Login