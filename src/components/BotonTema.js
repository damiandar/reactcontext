import React,{useContext} from 'react'
import { Fragment } from 'react';
import TemaContext from '../context/TemaContext'

const BotonTema = () => {

    const {temaEstado,handleCambiarTema,handleCambiarUsuario}= useContext(TemaContext);
    const cambiarUsuario=()=>{
        handleCambiarUsuario("Torres");
    }
    console.log(temaEstado);
    return (
        <Fragment>
            <button onClick={handleCambiarTema}>
                Cambiar tema
            </button>
            <button onClick={cambiarUsuario}>
                Cambiar usuario
            </button>
        </Fragment>
    )
}

export default BotonTema
