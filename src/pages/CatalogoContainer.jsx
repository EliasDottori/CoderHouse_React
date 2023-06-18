import React from 'react'
import CatalogoEspecial from './CatalogoEspecial';
import { useParams } from 'react-router-dom';

const CatalogoContainer = () => {

    const { id } = useParams();

    return (
        <div className="h-full w-full  bg-superclaro">
          
            <CatalogoEspecial idCategoria={id}/>
          </div>
      );
}

export default CatalogoContainer