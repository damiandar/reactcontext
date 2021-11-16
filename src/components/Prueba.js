import React,{useContext} from 'react'
import TemaContext from '../context/TemaContext'

const Prueba = () => {
    const {temaEstado,usuario} = useContext(TemaContext);
    return (
        <div>
            { temaEstado.background}
            {usuario}
        </div>
    )
}

export default Prueba
