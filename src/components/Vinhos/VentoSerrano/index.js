import React from "react";
import { Button } from "react-bootstrap";

import imageVentoSerrano from '../../../images/Sem título-1-18.jpg';

import "./index.css";

function Vento() {

  return (
    <>
      <img
        src={imageVentoSerrano}
        alt="Milka"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-ventoserrano">
        <Button target="_blank" href="https://drive.google.com/file/d/1PukEjQjzUdaat3MzbwUsWdixFnjowOJB/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Vento;
