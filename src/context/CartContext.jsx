import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  cantTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantTotal, setCantTotal] = useState(0);

  const agregarVino = (vino, cantidad) => {
    
    const vinoExist = cart.find((prod) => prod.vino.id === vino.id);

    if (!vinoExist) {
      setCart((prev) => [...prev, { vino, cantidad}]);
      setCantTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + vino.precio * cantidad);
    } else {
      const cartActualizado = cart.map((prod) => {
        if (prod.vino.id === vino.id) {
          return { ...prod, cant: prod.cant + cantidad };
        } else {
          return prod;
        }
      });
      setCart(cartActualizado);
      setCantTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + vino.precio * cantidad);
    }
  };


  const deleteVino = (id) => {
    const vinoDelete = cart.find((prod) => prod.vino.id === id);
    const cartActualizado = cart.filter((prod) => prod.vino.id !== id);
    setCart(cartActualizado);
    setCantTotal((prev) => prev - vinoDelete.cantidad);
    setTotal((prev) => prev - vinoDelete.vino.precio * vinoDelete.cantidad);
  };

  const vaciarCart = () => {
    setCart([]);
    setCantTotal(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarVino,
        deleteVino,
        vaciarCart,
        total,
        cantTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
