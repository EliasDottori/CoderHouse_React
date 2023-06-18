import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, vaciarCart, total, cantTotal } = useContext(CartContext);

  if (cantTotal === 0) {
    return (
      <>
      <div className="w-100  flex h-v100 justify-evenly py-15 items-center flex-col bg-superclaro  pt-48 ">
        <h2 className="text-6xl flex items-center"> Carrito Vacio</h2>
        <Link className="flex items-center cursor-pointer w-40 justify-center h-16 rounded border border-black bg-orange-200 p-1 active:bg-orange-300" to="/">
          {" "}
          Ver Productos{" "}
        </Link>
        </div>
      </>
    );
  }
  return (
    <div className="w-100  flex h-v100 justify-around bg-superclaro  pt-48 ">
      <div className="w-70 box-border overflow-hidden">
        {cart.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
      </div>
      <div className="w-30 h-full flex flex-col items-center justify-around">
      <h3 >Total de la Compra: ${total} </h3>
      <h3>Cantidad de Productos: {cantTotal} </h3>
      <button className="cursor-pointer h-12  w-32 rounded border border-black bg-orange-200 p-1 active:bg-orange-300" onClick={() => vaciarCart()}>
        {" "}
        Vaciar carrito{" "}
      </button>
      <Link className="cursor-pointer flex justify-center items-center w-80 h-20 rounded border border-black bg-orange-200 p-1 active:bg-orange-300" to="/checkout">
        {" "}
        Finalizar Compra{" "}
      </Link>
      </div>
    </div>
  );
};

export default Cart;
