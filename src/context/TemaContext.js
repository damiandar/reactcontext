import { createContext } from "react";

export const temas={
    oscuro:{
        foreground:'#FFFFFF',
        background:'#008000'
    },
    claro:{
        foreground:'#23444B',
        background:'#D0F204'
    }


}

const TemaContext= createContext(temas.claro);

export default TemaContext;