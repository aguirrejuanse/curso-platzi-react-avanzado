import React from "react";
import Layout from "../components/Layout";
import ListOfFavs from "../components/ListOfFavs";

import useGetFavorites from "../containers/useGetFavorites";

function Favs() {
  const { data } = useGetFavorites();

  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aquí puedes encontrar tus favoritos"
    >
      <ListOfFavs favs={data} />
    </Layout>
  );
}

export default Favs;
