import React from "react";
import { Link } from "react-router-dom";

const Home = ({ clickScroll }) => {
  return (
    <div className="h-screen w-full bg-center bg-no-repeat bg-cover bg-fondoCopas">
      <div
        className="flex w-full items-center flex-col 
                  h- justify-evenly h-90 text-lg"
      >
        <p className="text-9xl font-gab"> El Bodegon </p>
      </div>
      <div className="w-full h-10 transition-all duration-500 linear hover:bg-[rgba(39,41,44,0.6)]">
        <Link to="/"
          className="w-6/12 h-full flex justify-center items-center text-2xl
                    no-underline cursor-pointer mx-auto rounded-t-full text-white bg-[rgba(31,32,35,0.6)]"
          onClick={clickScroll}
        >
          Ver todos nuestros Productos
        </Link>
      </div>
    </div>
  );
};

export default Home;
