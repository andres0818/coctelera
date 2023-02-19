import { deleteDoc, doc } from 'firebase/firestore'
import React, { MouseEvent, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Cocktail } from '../../types'
import { db } from '../api/firebase'

import './ListCocktails.scss'

const ListCocktails = () => {
    const { newCocktail } = useContext(UserContext)

    const deleteCocktails = (e: Cocktail) => {
        deleteDoc(doc(db, 'cocktails', e.id))
    }



    return (
        <div className='listaCocktails'>

            {newCocktail.length !== 0 ?
                newCocktail.map(e => {
                    console.log(e.id)
                    return (
                        <div className='listaCocktails__container' key={e.idDrink}>
                            <img className='listaCocktails__img' src={e.strDrinkThumb} alt="" />
                            <p className='listaCocktails__name'>{e.strDrink}</p>
                            <button onClick={() => deleteCocktails(e)} className='listaCocktails__delete'>Eliminar</button>
                        </div>
                    )
                })
                :
                <div className='listaCocktails__mensajeVaciosContainer '>
                    <h1 className='listaCocktails__mensaje'>Animate a crear tu numevo cocktel</h1>
                </div> 
            }
        </div>
    )
}

export default ListCocktails