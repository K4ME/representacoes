import React from "react";
import Button from "../../components/Button";

import imagemImportados from "../../images/Sem título-1-02.jpg";

import { Container } from "./styles";

const Importados = () => {
  return (
    <>
      <img src={imagemImportados} alt="importados" style={{ width: "100%" }} />
      <Container>
        <Button>Ver produtos</Button>
      </Container>
    </>
  );
};

export default Importados;
