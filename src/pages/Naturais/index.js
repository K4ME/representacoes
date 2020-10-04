import React from "react";
//import { Button } from "react-bootstrap";

import imagemQualicoco from "../../images/Sem título-1-10.jpg";
import imagemBrasilFrutt from "../../images/Sem título-1-11.jpg";
import imagemMbee from "../../images/Sem título-1-15.jpg";

const Importados = () => {
  return (
    <>
      <img
        src={imagemQualicoco}
        alt="Qualicoco"
        style={{ width: "100%", height: "564px" }}
      />
      <img
        src={imagemBrasilFrutt}
        alt="BrasilFrutt"
        style={{ width: "100%", height: "622px" }}
      />
      <img
        src={imagemMbee}
        alt="Mbee"
        style={{ width: "100%", height: "622px" }}
      />
    </>
  );
};

export default Importados;
