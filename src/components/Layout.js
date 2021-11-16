import React,{useContext} from 'react'
import TemaContext from '../context/TemaContext'
import BotonTema from './BotonTema';
import Prueba from './Prueba';

const Layout = ({children}) => {
    const {temaEstado}=  useContext(TemaContext);
    return (
        <div style={{background: temaEstado.background , foreground: temaEstado.foreground  }}>
            <header>
                <nav>
                    <h3>Encabezado</h3>
                    <BotonTema/>
                    <Prueba/>
                </nav>
            </header>
            {children}
            <footer>
                <p>Pie de pagina</p>
            </footer>
        </div>
    )
}

export default Layout
