import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Importados from "../pages/Importados";
import Parceiros from "../pages/Parceiros";

import Naturais from "../pages/Naturais";
import Sucos from "../pages/Sucos";
import Alimentos from "../pages/Alimentos";
import Vinhos from "../pages/Vinhos";

import SobreEmpresa from "../pages/SobreEmpresa";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/importados" component={Importados} />
        <Route path="/parceiros" component={Parceiros} />
        <Route path="/sobreEmpresa" component={SobreEmpresa} />
        <Route path="/naturais" component={Naturais} />
        <Route path="/sucos" component={Sucos} />
        <Route path="/alimentos" component={Alimentos} />
        <Route path="/vinhos" component={Vinhos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
