import React, { useState } from 'react'
import { Cocktail } from '../../types'

interface props {
    e: Cocktail,
    order: object[]
    setOrder: Function
}

const Cards = ({ e, order, setOrder }: props) => {
    const [count, setCount] = useState<number>(0)


    const add = () => {
        setCount(count + 1)
        if (order.filter(i => i === e && console.log(e))) {

            setOrder([...order, e])
            console.log(order)

        }

    }
    const sub = () => count > 0 && setCount(count - 1)
    return (
        <div key={e.strDrinkThumb} className='Mesas__card'>
            <div className='pedidosMesa__checkboxContainer Mesas__checkboxContainer'>
               
                    <input className='Mesas__input' type='checkbox' name='' id={`${e.idDrink}`} />
                    <label className='Mesas__label' htmlFor={`${e.idDrink}`}></label>
               
                <img className='Mesas__img' src={e.strDrinkThumb} alt='imagen' />
                <p className='pedidosMesa__name'>{e.strDrink}</p>
                <div className='pedidosMesa__operations'>
                    <button className='pedidosMesa__btn' onClick={sub}>-</button>
                    <span className='pedidosMesa__count'>{count}</span>
                    <button className='pedidosMesa__btn' onClick={add}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Cards