import React, { useState } from 'react'
import { mesa } from '../img'
import './Mesas.scss'

const tables = [1, 2, 3, 4, 5, 6]

const Mesas = () => {

  const [occupiedTables,setOccupiedTables]=useState<number[]>([])


  const handlerCheckbox = (id: number, element: React.MouseEvent<HTMLInputElement>) => {

    const checkboxContiner = document.getElementById(`checkbox${id}`)

    if ((element.target as HTMLInputElement).checked) {
      if (checkboxContiner) {
        checkboxContiner.style.opacity = "0.5"
      }
    } else {
      if (checkboxContiner) {
        checkboxContiner.style.opacity = "1"
      }
    }

  }

  return (
    <div className='Mesas'>
      <h1 className='Mesas__title'>Cocktails</h1>
      <div className='Mesas__container' >
        {
          tables.map((id) => {
            return (
              <div className='Mesas__card' id={`checkbox${id}`} key={id}>

                <input onClick={(element) => handlerCheckbox(id, element)} type="checkbox" id={`checkbox-${id}`} />
                <label htmlFor={`checkbox-${id}`} ></label>

                <div className='contenedor'>
                  <img className='Mesas__img' id={`img_checkbox${id}`} src={mesa} alt="mesa" />
                  <p>{id}</p>
                </div>
              </div>
            )

          })
        }
      </div>
    </div>
  )
}

export default Mesas