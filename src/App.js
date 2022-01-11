import React, { useContext } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { Logo } from "./components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favs from "./pages/Favs";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
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
        <Route path="/detail/:detailId" component={Detail} />
        <Route path="/pet/:id" component={Home} />
        {!isAuth && <Route path="/login" component={NotRegister} />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Route path="/favs" component={Favs} />
        <Route path="/user" component={User} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
      <NavBar />
    </BrowserRouter>
  );
};
