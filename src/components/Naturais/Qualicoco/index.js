import React from "react";
import { Button } from "react-bootstrap";

import imageQualicoco from '../../../images/Sem título-1-10.jpg';

import "./index.css";

function Qualicoco() {

  return (
    <>
      <img
        src={imageQualicoco}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-qualicoco">
        <Button target="_blank" href="https://drive.google.com/file/d/1mezyis8gy2sa_85VAtXkAh8Bi2GXmGId/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Qualicoco;
