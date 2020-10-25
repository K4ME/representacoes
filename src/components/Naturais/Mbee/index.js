import React from "react";
import { Button } from "react-bootstrap";

import imageMbee from '../../../images/Sem título-1-15.jpg';

import "./index.css";

function Mbee() {

  return (
    <>
      <img
        src={imageMbee}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-mbee">
        <Button target="_blank" href="http://www.google.com.br" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Mbee;
