import React, { useContext } from "react";

import { AppContext } from "../Context";
import SubmitButton from "../components/SubmitButton";

function User() {
  const { removeAuth } = useContext(AppContext);
  return (
    <>
      <h2>User</h2>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  );
}

export default User;
