import React from 'react';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { GlobalStyle } from './styles/GlobalStyles';
import   Home   from './pages/Home';
import { Route, Router, BrowserRouter, Switch, Link } from 'react-router-dom';


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
        {
          detailId
          ? <PhotoCardWithQuery id={detailId} />
          :
          <>
            <Switch>
              <Route path='/pet/:id' component={Home} />
              <Route path='/' component={Home} />
            </Switch>
          </>
        }
    </BrowserRouter>
    
  )
}
