import React, { useState } from "react";
import "../components/PaginaInicial.css";
const PaginaInicial = () => {
  let [numero, setNumero] = useState(10);

  const gerarNumero = () => {
    const numeroNovo = Math.floor(Math.random() * (100 - 1) + 1);
    setNumero(numeroNovo);
  };
  return (
    <div className="pai">
      <div className="Container">
        <h3 className="title">Número Aleatório</h3>
        <h1 className="gerador">{numero}</h1>
        <div className="bot">
          <label>Click no botão para gerar um número Aleatório</label>
          <button onClick={gerarNumero}>Click-me1</button>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
