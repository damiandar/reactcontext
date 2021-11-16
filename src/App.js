import React,{useState} from 'react'
import Layout from './components/Layout';
import Prueba from './components/Prueba';
import TemaContext,{temas} from './context/TemaContext';

const App = () => {
  const [temaEstado, setTemaEstado] = useState(temas.oscuro);
  const [usuario,setUsuario]=useState("rosso");
  const handleCambiarTema=()=>{
    setTemaEstado(()=>{
      return temaEstado===temas.oscuro ? temas.claro : temas.oscuro;
    })
  }
  const handleCambiarUsuario=(user)=>{
    setUsuario(user);
  }
  return (
    <TemaContext.Provider value={{temaEstado,usuario, handleCambiarTema,handleCambiarUsuario}}> 
      <Layout>
        <h1>Componente </h1>
        <Prueba/>
      </Layout>
   
    </TemaContext.Provider>
  )
}

export default App
