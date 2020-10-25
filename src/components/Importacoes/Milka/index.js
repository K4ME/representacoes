import React from "react";
import { Button } from "react-bootstrap";

import imageMilka from '../../../images/Sem título-1-08.jpg';

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
        <Button target="_blank" href="https://drive.google.com/file/d/1Q0Udrzq21-PWPn_kW1AfDl4_9vCjQzlN/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Milka;
