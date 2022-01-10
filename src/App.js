import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Logo />
    <Switch>
      <Route path="/pet/:id" component={Home} />
      <Route path="/" component={Home} />
      <Route path="/detail/:detailId" component={Detail} />
    </Switch>
  </BrowserRouter>
);
