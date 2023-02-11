import React, { useContext, useState } from 'react'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import { Cocktail } from '../../types'

interface props {
    e: Cocktail,
}

const Cards = ({ e }: props) => {
    const [count, setCount] = useState<number>(0)
    const { orders, nameTable } = useContext(UserContext)
    const { setOrders } = useContext(UserDispatcherContext)

    const add = () => setCount(count + 1)

    const sub = () => count > 0 && setCount(count - 1)

    const addOrder = (checked: React.MouseEvent<HTMLInputElement>) => {
        if ((checked.target as HTMLInputElement).checked) {

            const existingOrder = orders.find(order => order.id === `${nameTable} ${e.strDrink}`)
            if (existingOrder) {
                existingOrder.count += count
                setCount(0)
            } else {
                setOrders(orders.concat([
                    {
                        id: `${nameTable} ${e.strDrink}`,
                        table: nameTable,
                        name: e.strDrink,
                        photo: e.strDrinkThumb,
                        count: count,
                        price: e.strDrink.length
                        
                    }
                ])
                )
            }
        } else {
            setOrders(orders.filter(order => order.id !== `${nameTable} ${e.strDrink}`))
        }
    }

    return (
        <div key={e.strDrinkThumb} className='Mesas__card'>
            <div className='pedidosMesa__checkboxContainer Mesas__checkboxContainer'>

                <input onClick={(checked) => addOrder(checked)} className='Mesas__input' type='checkbox' name='' id={`${e.idDrink}`} />
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