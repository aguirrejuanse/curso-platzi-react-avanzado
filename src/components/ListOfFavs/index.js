import React from "react";

import { Grid, Image, Link } from "./styles";

const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {!!favs.favs &&
        favs.favs?.map((fav) => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} alt={fav.name} />
          </Link>
        ))}
    </Grid>
  );
};

export default ListOfFavs;
