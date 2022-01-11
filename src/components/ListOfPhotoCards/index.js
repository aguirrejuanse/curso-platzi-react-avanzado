import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardsComponent = ({ data }) => {
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          src={photo.src}
          liked={photo.liked}
          likes={photo.likes}
          {...photo}
        />
      ))}
    </ul>
  );
};
