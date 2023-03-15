import React from "react";
import'../hojas-de-estylo/boton.css';

 function Boton ({texto, esBotonDeClic // si el votn es de clic 
  ,manejarclic}){
    return(
        <button className={ esBotonDeClic? 'boton-clic' : 'boton-reiniciar' } // condicionamos si es o no 
        onClick = {manejarclic}>

            {texto}
        </button>
    )
 }
 export default Boton;