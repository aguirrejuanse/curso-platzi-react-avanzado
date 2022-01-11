import React from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";

import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards";
import Layout from "../components/Layout";

const Home = () => {
  const { id } = useParams();

  return (
    <Layout title="Tu app de fotos de mascotas">
      <ListOfCategories />
      <ListOfPhotoCards categoryId={parseFloat(id)} />
    </Layout>
  );
};

export default withRouter(Home);
