import React from 'react'

const CounterCant = () => {
  return (
    <div className="w-45 flex justify-between">
              <button  className="p-1 rounded bg-orange-200 cursor-pointer border w-8 font-bold border-black">-</button>
              <input  className="w-12 text-center rounded bg-orange-200 border border-black" type="text" defaultValue={1} required />
              <button  className="p-1 rounded bg-orange-200 cursor-pointer border w-8 font-bold border-black">+</button>
              <button  className="p-1 rounded bg-orange-200 cursor-pointer border border-black">Agregar</button>
            </div>
  )
}

export default CounterCant