import React from "react";
import { Button } from "react-bootstrap";

import HugoPietro from '../../../images/Sem título-1-12.jpg';

import "./index.css";

function Hugo() {

  return (
    <>
      <img
        src={HugoPietro}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-hugopietro">
        <Button target="_blank" href="https://drive.google.com/file/d/1UKfiCCHjLrKZBnV1XbO6v1MQ3wZA44xI/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Hugo;
