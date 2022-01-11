import React from "react";
import PropTypes from "prop-types";

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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};
