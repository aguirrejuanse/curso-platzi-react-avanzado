import React, { useContext } from "react";

import UserForm from "../components/UserForm";
import { useRegisterMutation } from "../containers/RegisterMutation";
import { AppContext } from "../Context";

const NotRegister = () => {
  const { activateAuth } = useContext(AppContext);
  const { registerMutation } = useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(() => activateAuth());
  };

  return (
    <>
      <UserForm title="Registrarse" onSubmit={onSubmit} />
      <UserForm title="Iniciar sesión" onSubmit={activateAuth} />
    </>
  );
};

export default NotRegister;
