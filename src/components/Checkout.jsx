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
        img: vino.img
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
      <h2>Checkout</h2>
      <form className="formulario">
        
        <p>Total Compra: ${total} </p>
        <hr />

        <div className="form-group">
          <label htmlFor=""> Nombre </label>
          <input
            
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Apellido </label>
          <input
            
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Telefono </label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email </label>
          <input
            
          />
        </div>

        <div className="form-group">
          <label htmlFor=""> Email Confirmación </label>
          <input
            
          />
        </div>

        {error && <p style={{ color: "red" }}> {error} </p>}
        <button className="miBtn" type="submit">
          {" "}
          Finalizar Compra{" "}
        </button>
      </form>
      
      <div class="relative mx-auto w-full bg-superclaro" onSubmit={manejadorFormulario}>
        <div class="grid min-h-screen grid-cols-10">
          <div class="col-span-full px-4 py-6 sm:py-12 lg:col-span-6 lg:py-24">
            <div class="mx-auto w-full max-w-lg">
              <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Finalizar Compra
                <span class="mt-2 block h-1 w-10 bg-superoscuro sm:w-20"></span>
              </h1>
              <form action="" class="mt-10 flex flex-col space-y-4">
                <div>
                  <label
                    for="nombre"
                    class="text-xs font-semibold text-gray-500"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label
                    for="apellido"
                    class="text-xs font-semibold text-gray-500"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Apellido"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="text-xs font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.capler@fang.com"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="text-xs font-semibold text-gray-500"
                  >
                    Confirmar Email
                  </label>
                  <input
                    type="email"
                    value={emailConfirmacion}
                    onChange={(e) => setEmailConfirmacion(e.target.value)}
                    placeholder="john.capler@fang.com"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div class="relative">
                  <label
                    for="card-number"
                    class="text-xs font-semibold text-gray-500"
                  >
                    Telefono
                  </label>
                  <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+ 54 xx xxxx xxxx"
                    class="block w-full rounded border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    class="absolute bottom-3 right-3 max-h-4"
                  />
                </div>

                
              </form>
              <button
                type="submit"
                class="mt-4 inline-flex w-full items-center justify-center rounded bg-claro px-4 py-2.5 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-superoscuro sm:text-lg"
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

          {cart.map((producto) => (
          <div key={producto.item.id} class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div>
              <img
                src=""
                alt=""
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
            </div>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p> Precio $: {producto.item.precio} </p>
            <hr />
          </div>
        ))}
          <div >
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
