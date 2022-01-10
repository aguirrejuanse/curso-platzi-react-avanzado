import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favs from "./pages/Favs";
import User from "./pages/User";
import NotRegister from "./pages/NotRegister";
import NavBar from "./components/NavBar";

const isLogged = false;

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Logo />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:detailId" component={Detail} />
      <Route path="/pet/:id" component={Home} />
      <Route path="/favs" component={isLogged ? Favs : NotRegister} />
      <Route path="/user" component={isLogged ? User : NotRegister} />
    </Switch>

    <NavBar />
  </BrowserRouter>
);
