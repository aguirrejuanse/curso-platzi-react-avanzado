import React, { useContext } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favs from "./pages/Favs";
import User from "./pages/User";
import NotRegister from "./pages/NotRegister";
import NavBar from "./components/NavBar";
import { AppContext } from "./Context";

export const App = () => {
  const {
    user: { isAuth },
  } = useContext(AppContext);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:detailId" component={Detail} />
        <Route path="/pet/:id" component={Home} />
        <Route path="/favs" component={isAuth ? Favs : NotRegister} />
        <Route path="/user" component={isAuth ? User : NotRegister} />
      </Switch>
      <NavBar />
    </BrowserRouter>
  );
};
