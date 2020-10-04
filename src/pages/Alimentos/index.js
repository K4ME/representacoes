import React from "react";
import { Button } from "react-bootstrap";

import imagemRigomel from "../../images/Sem título-1-13.jpg";
import imagemNeumann from "../../images/Sem título-1-14.jpg";

const Importados = () => {
  return (
    <>
      <img
        src={imagemRigomel}
        alt="Rigomel"
        style={{ width: "100%", height: "564px" }}
      />
      <img
        src={imagemNeumann}
        alt="Neumann"
        style={{ width: "100%", height: "622px" }}
      />
    </>
  );
};

export default Importados;
