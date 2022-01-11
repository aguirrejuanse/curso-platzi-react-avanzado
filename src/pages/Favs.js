import React from "react";
import ListOfFavs from "../components/ListOfFavs";

import useGetFavorites from "../containers/useGetFavorites";

function Favs() {
  const { data } = useGetFavorites();

  return (
    <>
      <h2>Favs</h2>
      <ListOfFavs favs={data} />
    </>
  );
}

export default Favs;
