import React from "react";
import { Button } from "react-bootstrap";

import imageCuveEllit from '../../../images/Sem título-1-17.jpg';

import "./index.css";

function Cuve() {

  return (
    <>
      <img
        src={imageCuveEllit}
        alt="CuveEllit"
        style={{ width: "100%", height: "100%" }}
      />
      <div id="button-container-cuveellit">
        <Button target="_blank" href="https://drive.google.com/file/d/15ZrqIXpbb7QvWALiwZNxUsTmIg2LmYhw/view?usp=sharing" className="bt1">Ver Catálogo</Button>
        <Button target="_blank" href="http://www.google.com.br" className="bt2">Fazer Pedido</Button>
      </div>
    </>
  );
}

export default Cuve;
