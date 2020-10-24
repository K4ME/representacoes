import React from "react";
import { Button } from "react-bootstrap";

import imageMilka from '../../images/Sem título-1-08.jpg';

import "./index.css";

function Milka() {
  return (
    <>
      <img
        src={imageMilka}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container">
        <Button className="bt1">Ver Catálogo</Button>
        <Button className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Milka;
