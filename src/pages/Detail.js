import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";

const Detail = () => {
  const { detailId } = useParams();
  return (
    <Layout title={`Foto ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};

export default Detail;
