import React, { Fragment } from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo';
import { PhotoCard } from './components/PhotoCard';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { GlobalStyle } from './styles/GlobalStyles';


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : 
          <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={5} />
          </Fragment>
      }
    </div>
  )
}
