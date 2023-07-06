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
        <div className="w-100 py-15 flex h-v100 flex-col items-center justify-evenly bg-superclaro pt-48">
          <h2 className="flex items-center text-6xl"> Carrito Vacio</h2>
          <Link
            className="flex h-16 w-40 cursor-pointer items-center justify-center rounded border border-black bg-orange-200 p-1 active:bg-orange-300"
            to="/"
          >
            {" "}
            Ver Productos{" "}
          </Link>
        </div>
      </>
    );
  }
  if (cantTotal > 0) {
  return (
    <div className="w-100 flex h-v100 justify-around bg-superclaro pt-36">
      <div className="w-70 overflow-y-scroll">
        {cart.map((vino) => {
          return <CartItem key={vino.id} {...vino} />;
        })}
      </div>
      <div className="flex h-full w-30 flex-col items-center justify-around bg-claro">
        <h3>Total de la Compra: ${total}</h3>
        <h3>Cantidad de Productos: {cantTotal}</h3>
        <button
          className="h-12 w-32 cursor-pointer rounded border border-black bg-orange-200 p-1 active:bg-orange-300"
          onClick={() => vaciarCart()}
        >
          Vaciar carrito
        </button>
        <Link
          className="flex h-20 w-80 cursor-pointer items-center justify-center rounded border border-black bg-orange-200 p-1 active:bg-orange-300"
          to="/checkout"
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}
};

export default Cart;
