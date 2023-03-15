import React from "react";
import '../hojas-de-estylo/contador.css';

function Contador ({numclics}){
    return(
        <div className="contador ">
            {numclics}

        </div>
    );
}

 export default Contador;