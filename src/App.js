import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo';
import { PhotoCard } from './components/PhotoCard';
import { GlobalStyle } from './styles/GlobalStyles';


export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={3} />
  </div>
)