import React, { SetStateAction } from 'react'
import './Modal.scss'

interface props {
    setAccountModal: (value: SetStateAction<boolean>) => void
}

const ModalAccount = ({ setAccountModal }: props) => {
    return (
        <div className='modal'>
            <div className='modal__container'>
                <h1>user Admin: admin@admin.adm</h1>
                <h1>password Admin: 123456</h1>
                <button className='modal__exit' onClick={() => setAccountModal(false)}>Exit</button>
            </div>
        </div>
    )
}

export default ModalAccount