import React from "react";
import { Button } from "react-bootstrap";

import imageCostazurra from "../../../images/Sem título-1-19.jpg";

import "./index.css";

function Costa() {
  return (
    <>
      <img
        src={imageCostazurra}
        alt="Coca"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-costazurra">
        <Button target="_blank" href="https://drive.google.com/file/d/12XIaPWd06-bfR595Uj7GRfYEtdGwIE35/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Costa;