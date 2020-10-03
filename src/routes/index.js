import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Importados from "../pages/Importados";
import Parceiros from "../pages/Parceiros";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/importados" component={Importados} />
      <Route path="/parceiros" component={Parceiros} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
