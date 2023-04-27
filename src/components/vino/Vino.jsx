import React from 'react'
import "./Vino.css"

const Vino = () => {
  return (
    <div className='containerVino'>
        <div className="textContainer">
          <h1>Don Valentin Lacrado</h1>
          <div className="tipoText">
            <p>Trapiche</p>
            <p>Lacrado</p>
            <p>Tinto</p>
          </div>
          <div className="tipoText">
            <h2>$1500</h2>
            <div className="containerButton">
              <button  className="btnAgregar">-</button>
              <input  className="textboxCantidad" type="text" defaultValue={1} required />
              <button  className="btnAgregar">+</button>
              <button  className="btnAgregar">Agregar</button>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <div className="imgVino">
            <div className='imagenVino'></div>
          </div>
        </div>
  </div>
  )
}

export default Vino