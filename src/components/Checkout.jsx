import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, deleteCart, total } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrderId] = useState("");

  //funciones y validaciones:

  const manejadorFormulario = (event) => {
    event.preventDefault();

    //Verificamos que los campos esten completos:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }

    //Validamos que los campos del email coincidan
    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    //Paso 1: Creamos el objeto de la orden:

    const order = {
      items: cart.map((vino) => ({
        id: vino.item.id,
        nombre: vino.item.nombre,
        cantidad: vino.cantidad,
        img: vino.img,
      })),
      total: cart.reduce(
        (total, vino) => total + vino.item.precio * vino.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    //Vamos a modificar el código para que ejecute varias promesas en paralelo, por un lado que actualice el stock de productos y por otro que genere una orden de compras. Promise.All me permite esto:

    Promise.all(
      order.items.map(async (vinoOrder) => {
        //Por cada producto en la colección inventario obtengo una referencia, y a partir de esa referencia obtengo el doc.
        const vinoRef = doc(db, "inventario", vinoOrder.id);
        const vinoDoc = await getDoc(vinoRef);
        const stockActual = vinoDoc.data().stock;
        //Data es un método qu eme permite acceder a la información del Documento.
        await updateDoc(vinoRef, {
          stock: stockActual - vinoOrder.cantidad,
        });
        //Modifico el stock y subo la información actualizada.
      })
    )
      .then(() => {
        //Guardan la orden de compra en la base de datos:
        addDoc(collection(db, "order"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            deleteCart();
          })
          .catch((error) => {
            console.error("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden");
          });
      })
      .catch((error) => {
        console.error("Error al actualizar el stock", error);
        setError(
          "Se produjo un error al actualizar el stock de los productos, vuelva más tarde"
        );
      });
  };

  return (
    <div>
      <div
        className="relative mx-auto w-full bg-superclaro"
        onSubmit={manejadorFormulario}
      >
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full px-4 py-6 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Finalizar Compra
                <span className="mt-2 block h-1 w-10 bg-superoscuro sm:w-20"></span>
              </h1>
              <form action="" className="mt-10 flex flex-col space-y-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apellido"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Apellido"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.capler@fang.com"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Confirmar Email
                  </label>
                  <input
                    type="email"
                    value={emailConfirmacion}
                    onChange={(e) => setEmailConfirmacion(e.target.value)}
                    placeholder="john.capler@fang.com"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="card-number"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Telefono
                  </label>
                  <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+ 54 xx xxxx xxxx"
                    className="block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
              </form>
              {error && <p style={{ color: "red" }}> {error} </p>}
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-claro px-4 py-2.5 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-superoscuro sm:text-lg"
              >
                Confirmar Compra
              </button>
              {ordenId && (
                <strong className="ordenId">
                  ¡Gracias por tu compra! Tu número de Orden es {ordenId}{" "}
                </strong>
              )}
            </div>
          </div>

          <div className="relative col-span-full mt-20 flex flex-col bg-claro py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-20">
            <div className="relative">
              {cart.map((producto) => (
                <ul className=" mt-16 box-border h-20 " key={producto.item.id}>
                  <li className="flex justify-between h-20">
                    <div className="inline-flex">
                      <div className="w-32 flex justify-center h-full items-end ">
                        <img
                          src={`/images/wine/${producto.item.img}`}
                          alt=""
                          className="h-32"
                        />
                      </div>

                      <div className="ml-3">
                        <p className="text-base font-semibold text-superoscuro">
                          {producto.item.nombre}
                        </p>
                        <p className="text-sm font-medium text-superoscuro text-opacity-80">
                          {producto.cantidad}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-superoscuro">
                      $ {producto.item.precio}
                    </p>
                  </li>
                </ul>
              ))}
              <div className="my-5 h-0.5 w-full bg-superoscuro bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-superoscuro">
                  <span>Total a Pagar</span>
                  <span>$ {total}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
