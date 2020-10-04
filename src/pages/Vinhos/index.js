import React from "react";
import { Button } from "react-bootstrap";

import imagemVentoSerrano from "../../images/Sem título-1-18.jpg";
import imagemSantaVitta from "../../images/Sem título-1-16.jpg";
import imagemCuveEllit from "../../images/Sem título-1-17.jpg";

const Importados = () => {
  return (
    <>
      <img
        src={imagemVentoSerrano}
        alt="VentoSerrano"
        style={{ width: "100%", height: "564px" }}
      />
      <img
        src={imagemSantaVitta}
        alt="SantaVitta"
        style={{ width: "100%", height: "622px" }}
      />
      <img
        src={imagemCuveEllit}
        alt="CuveEllit"
        style={{ width: "100%", height: "622px" }}
      />
    </>
  );
};

export default Importados;
