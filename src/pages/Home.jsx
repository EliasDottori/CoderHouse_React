import React from "react";
import { Link } from "react-router-dom";
import HomeContent from "../components/HomeContent";

const Home = () => {

  return (
    <div className="mt-24 h-70 w-full bg-fondoCopas bg-cover bg-center bg-no-repeat">
      <div className="h- flex h-90 w-full flex-col items-center justify-evenly text-lg">
        <p className="font-gab text-9xl"> El Bodegon </p>
      </div>
      <div className="linear h-10 w-full transition-all duration-500 hover:bg-[rgba(39,41,44,0.6)]">
        <Link
          to="/"
          className="mx-auto flex h-full w-6/12 cursor-pointer items-center
                    justify-center rounded-t-full bg-[rgba(31,32,35,0.6)] text-2xl text-white no-underline"
        >
          Ver todos nuestros Productos
        </Link>
      </div>
      <HomeContent />
      
    </div>
  );
};

export default Home;
