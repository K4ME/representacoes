import React from "react";

import imagemCoca from "../../images/Sem título-1-09.jpg";
import imagemCostazurra from "../../images/Sem título-1-19.jpg";

import Milka from "../../components/Milka";

const Importados = () => {
  return (
    <>
      <Milka />
      <img
        src={imagemCoca}
        alt="Coca"
        style={{ width: "100%", height: "100%" }}
      />
      <img
        src={imagemCostazurra}
        alt="Costazurra"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};

export default Importados;
