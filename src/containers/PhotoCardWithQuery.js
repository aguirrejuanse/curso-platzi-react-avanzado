import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { useQuery, gql } from "@apollo/client";

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const getPhoto = (id) => {
  const { loading, error, data } = useQuery(getSinglePhoto, {
    variables: { id },
  });
  if (loading) return <PhotoCard loading={loading} />;
  if (error) return <h2>Error...</h2>;
  return <PhotoCard id={id} {...data.photo} />;
};

export const PhotoCardWithQuery = ({ id }) => <>{getPhoto(id)}</>;
