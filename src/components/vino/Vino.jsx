import React from 'react'
import "./Vino.css"



const Vino = (props) => {
  const { nombre, bodega, tipo, variedad, precio } = props.vino
  return (
    <div className='containerVino'>
        <div className="textContainer">
          <h1>{nombre}</h1>
          <div className="tipoText">
            <p>{bodega}</p>
            <p>{variedad}</p>
            <p>{tipo}</p>
          </div>
          <div className="tipoText">
            <h2>{precio}</h2>
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