import React from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

import { Link, Nav } from "./styles";

const SIZE = "32px";

function index() {
  return (
    <Nav>
      <Link exact to="/">
        <MdHome size={SIZE} />
      </Link>
      <Link exact to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link exact to="/user">
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
}

export default index;
