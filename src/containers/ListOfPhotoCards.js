import React from 'react'
import { useQuery } from "@apollo/client";
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/index'
import { withPhotos } from '../hoc/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, error, data } = useQuery(withPhotos, {
        variables: { categoryId }
    })

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <ListOfPhotoCardsComponent data={data} />
}