import React, { useContext, useEffect } from 'react'
import { UserContext, UserDispatcherContext } from '../../context/UserContext'
import { mesa } from '../../img'
import './Mesas.scss'


const Mesas = () => {

  const tables = [1, 2, 3, 4, 5, 6]
  const { navigate, setOccupiedTables, setNameTable } = useContext(UserDispatcherContext)
  const { occupiedTables } = useContext(UserContext)


  const handlerCheckbox = (id: number, element: React.MouseEvent<HTMLInputElement>) => {

    if ((element.target as HTMLInputElement).checked) {

      const validityTable = occupiedTables.filter(e => e === id)
      validityTable[0] !== id && setOccupiedTables([...occupiedTables, id])

    }

    else {
      const index = occupiedTables.indexOf(id)

      if (index > -1) {

        setOccupiedTables(
          occupiedTables.filter((table: number) => table !== id)
        )
      }
    }
  }

  useEffect(() => {
    tables.forEach((id) => {

      const checkbox = document.getElementById(`checkbox-${id}`) as HTMLInputElement;
      const checkboxContiner = document.getElementById(`checkbox${id}`)

      if (checkbox && occupiedTables.includes(id)) {
        checkboxContiner && (checkboxContiner.style.opacity = "0.5");
        checkbox.checked = true;
      }

      else if (checkboxContiner) checkboxContiner.style.opacity = "1"

    });
  }, [occupiedTables]);


  const handlerNavigate = (id: number) => {
    navigate(`/cocktails/PedidosMesa${id}`)
    setNameTable(`Mesa ${id}`)
  }


  return (
    <div className='Mesas'>
      <p className='Mesas__title'>Realizar Pedidos</p>
      <h1 className='Mesas__subTitle'>Cocktails</h1>
      <div className='Mesas__container' >
        {
          tables.map((id) => {
            return (
              <div className='Mesas__card' id={`checkbox${id}`} key={id}>

                <input className='Mesas__input' onClick={(element) => handlerCheckbox(id, element)} type="checkbox" id={`checkbox-${id}`} />
                <label className='Mesas__label' htmlFor={`checkbox-${id}`}  ></label>

                <div className='contenedor'>
                  {
                    occupiedTables.includes(id)
                      ? <img onClick={() => handlerNavigate(id)} src={mesa} alt='mesa' className='Mesas__img' />
                      : <img src={mesa} alt='mesa' className='Mesas__img' />
                  }
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