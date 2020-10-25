import React from "react";
import { Button } from "react-bootstrap";

import imageRigomel from '../../../images/Sem título-1-13.jpg';

import "./index.css";

function Rigo() {

  return (
    <>
      <img
        src={imageRigomel}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-rigomel">
        <Button target="_blank" href="https://drive.google.com/file/d/1em6U6wNAP8AnwGq57OGljD4ilSBulCB_/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Rigo;
