import { addDoc, collection } from 'firebase/firestore';
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { ImgIcon } from '../../img'
import { db } from '../api/firebase';
import './AddCocktail.scss'

const AddCocktail = () => {
  const { newCocktail } = useContext(UserContext)

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.currentTarget


    if (!newCocktail.find((e: any) => e.idDrink === value.idDrink.value)) {

      if (!newCocktail.find((e: any) => e.strDrink === value.strDrink.value)) {

        addDoc(collection(db, "cocktails"), {
          idDrink: value.idDrink.value,
          strDrinkThumb: value.strDrinkThumb.value,
          strDrink: value.strDrink.value
        })

        e.currentTarget.idDrink.value = ''
        e.currentTarget.strDrinkThumb.value = ''
        e.currentTarget.strDrink.value = ''

      } else {
        alert('ya existe ese Nombre')
      }

    } else {
      alert('ya existe ese ID')
    }
  }
  

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