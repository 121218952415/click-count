import React, { useState } from "react";
import "./App.css";
import Boton from "./componentes/botton";
import Contador from "./componentes/contador";

function App() {
  const [numclics, setnumclics] = useState(0);

  const manejarclic = () => {
    setnumclics(numclics + 1);
  };
  const reiniciarclic = () => {
    setnumclics(0);
  };
  return (
    <div className="app">
      <div className="letras-principal">
        <h1> CONTADOR DE CLICS </h1>
      </div>

      <div className="contenedor-principal">
        <Contador numclics={numclics} />
        <Boton texto="Boton" esBotonDeClic={true} manejarclic={manejarclic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarclic={reiniciarclic}
        />
      </div>
    </div>
  );
}

export default App;
