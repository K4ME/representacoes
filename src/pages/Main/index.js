import React from "react";

import imageSobreEmpresa from "../../images/Sem título-1-01.jpg";
import imageImportados from "../../images/Sem título-1-02.jpg";
import imageNaturais from "../../images/Sem título-1-03.jpg";
import imageSucos from "../../images/Sem título-1-04.jpg";
import imageAlimentos from "../../images/Sem título-1-05.jpg";
import imageVinhos from "../../images/Sem título-1-06.jpg";
import imageParceiros from "../../images/Sem título-1-07.jpg";

function Main() {
  return (
    <>
      <img
        src={imageSobreEmpresa}
        alt="sobre a empresa"
        width="100%"
        height="100%"
      />

      <img
        src={imageImportados}
        alt="sobre a empresa"
        width="100%"
        height="100%"
      />

      <img
        src={imageNaturais}
        alt="sobre a empresa"
        width="100%"
        height="100%"
      />

      <img src={imageSucos} alt="sobre a empresa" width="100%" height="100%" />

      <img
        src={imageAlimentos}
        alt="sobre a empresa"
        width="100%"
        height="100%"
      />

      <img src={imageVinhos} alt="sobre a empresa" width="100%" height="100%" />

      <img
        src={imageParceiros}
        alt="sobre a empresa"
        width="100%"
        height="100%"
      />
    </>
  );
}

export default Main;
