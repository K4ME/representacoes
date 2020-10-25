import React from "react";
import { Button } from "react-bootstrap";

import imageSantaVitta from '../../../images/Sem título-1-16.jpg';

import "./index.css";

function Santa() {

  return (
    <>
      <img
        src={imageSantaVitta}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-santavitta">
        <Button target="_blank" href="https://drive.google.com/file/d/1M2XkBtrW_fKG1fDNb8f5vjvqZr_hpC2B/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Santa;
