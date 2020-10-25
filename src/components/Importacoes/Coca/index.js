import React from "react";
import { Button } from "react-bootstrap";

import imageCoca from "../../../images/Sem título-1-09.jpg";

import "./index.css";

function Coca() {
  return (
    <>
      <img
        src={imageCoca}
        alt="Coca"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-coca">
        <Button target="_blank" href="https://drive.google.com/file/d/1kttLTTPzYYXWBj5oI7ZFJKnHNEiiGXdE/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Coca;