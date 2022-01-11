import React from "react";
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards/index";
import { PhotoCard } from "../components/PhotoCard";
import { useQuery } from "@apollo/client";
import { withPhotos } from "../hoc/withPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId },
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return (
      <PhotoCard
        loading={loading}
        likes={1}
        src={`Photo ${categoryId}`}
        id={`Photo ${categoryId}`}
        liked={true}
      />
    );
  }

  return <ListOfPhotoCardsComponent data={data} />;
};
