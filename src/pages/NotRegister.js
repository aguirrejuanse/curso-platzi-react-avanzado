import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import UserForm from "../components/UserForm";
import { AppContext } from "../Context";

const NotRegister = () => {
  const history = useHistory();
  const { login } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e);
    history.push("/user");
  };

  return (
    <>
      <UserForm title="Registrarse" onSubmit={handleSubmit} />
      <UserForm title="Iniciar sesión" onSubmit={handleSubmit} />
    </>
  );
};

export default NotRegister;
