import React from 'react'
import "./CounterCant.css"

const CounterCant = () => {
  return (
    <div className="containerButton">
              <button  className="btnAgregar">-</button>
              <input  className="textboxCantidad" type="text" defaultValue={1} required />
              <button  className="btnAgregar">+</button>
              <button  className="btnAgregar">Agregar</button>
            </div>
  )
}

export default CounterCant