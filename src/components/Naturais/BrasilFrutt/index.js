import React from "react";
import { Button } from "react-bootstrap";

import imageBrasilFrutt from '../../../images/Sem título-1-11.jpg';

import "./index.css";

function BrasilFrutt() {

  return (
    <>
      <img
        src={imageBrasilFrutt}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-brasilfrutt">
        <Button target="_blank" href="https://drive.google.com/file/d/1TgxvvvDQ75B2vFLQTknvttHPNARoVXBe/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default BrasilFrutt;
