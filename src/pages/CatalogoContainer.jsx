import React from 'react'
import Catalogo from './Catalogo';
import { useParams } from 'react-router-dom';

const CatalogoContainer = () => {

    const { id } = useParams();
    return (
        <div className="h-full w-full min-h-v100 bg-superclaro">
          
            <Catalogo idCategoria={id}/>
          </div>
      );
}

export default CatalogoContainer