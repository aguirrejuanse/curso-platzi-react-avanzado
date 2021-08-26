import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { withRouter } from'react-router-dom'
import { useParams } from 'react-router';

// se puede obtener el id por props pero prefiero useParams
//{ id }
const Home = () => {
  const { id } = useParams()

  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={parseFloat(id)} />
    </Fragment>
  )
}

export default withRouter(Home)