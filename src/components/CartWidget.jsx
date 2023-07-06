import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
 const { cantTotal } = useContext(CartContext)
  return (
    <div className="h-full flex justify-around items-center w-10">

          <Link to="/Cart" id="btnCarritoHTML" className="h-full w-24 bg-center bg-contain bg-no-repeat bg-cart">
            <div className="absolute h-6 w-6 flex justify-center items-center font-bold text-l rounded bg-[rgba(254,240,138,1)] border-2 border-black border-solid">{cantTotal}</div>
          </Link>
        </div>
  )
}

export default CartWidget