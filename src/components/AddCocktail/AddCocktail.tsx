import React, { useState } from 'react'
import { ImgIcon } from '../../img'
import './AddCocktail.scss'

const AddCocktail = () => {
  const [newCocktail, setNewCocktail] = useState<any[]>([])

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.currentTarget
    setNewCocktail(
      [...newCocktail, {
        idDrink: value.idDrink.value,
        strDrinkThumb: value.strDrinkThumb.value,
        strDrink: value.strDrink.value
      }]
    )
    e.currentTarget.idDrink.value = ''
    e.currentTarget.strDrinkThumb.value = ''
    e.currentTarget.strDrink.value = ''
  }
  console.log(newCocktail)

  return (
    <div className='AddCocktail'>
      <h1 className='AddCocktail__title'>Agregar cocktel</h1>
      <img className='AddCocktail__iconImg' src={ImgIcon} alt="" />
      <form className='AddCocktail__form' onSubmit={(e) => handlerSubmit(e)}>
        <input className='AddCocktail__inputs' required name='idDrink' type="number" placeholder='Id Cocktail' />
        <input className='AddCocktail__inputs' required name='strDrinkThumb' type="text" placeholder='Url photo' />
        <input className='AddCocktail__inputs' required name='strDrink' type="text" placeholder='Name Cocktail' />
        <button className='AddCocktail__submit' type="submit">Guardar</button>
      </form>

    </div>
  )
}

export default AddCocktail