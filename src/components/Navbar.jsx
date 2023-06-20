import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav
        className="bg- bg-27deg fixed top-0 z-50 
      box-border flex h-24 w-full items-center justify-between overflow-hidden
      bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 p-2"
      >
        <Link
          to="/"
          title="inicio"
          className="h-full w-56 bg-icon bg-contain bg-center bg-no-repeat"
        ></Link>

        <div className="flex h-full w-6/12 items-center justify-around">
          <Link
            to="/Catalogo/1"
            className="border-fde3cd flex h-full w-64 
          items-center justify-center border-l-2 border-r-2 font-gab text-4xl text-black no-underline"
          >
            Catalogo Completo
          </Link>

          <Link
            to="/Catalogo/2"
            className="border-fde3cd flex h-full w-64 
          items-center justify-center border-l-2 border-r-2 font-gab text-4xl text-black no-underline"
          >
            Vinos Tintos
          </Link>

          <NavLink
            to="/Catalogo/3"
            className="border-superoscuro flex h-full w-64 bg-superclaro items-center justify-center border-l-2 border-r-2 font-gab text-4xl text-black no-underline"
            activeClassName="bg-superclaro"
          >
            Vinos Blancos
          </NavLink>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default navbar;
