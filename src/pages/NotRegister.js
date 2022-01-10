import React, { useContext } from "react";

import UserForm from "../components/UserForm";
import { useRegisterMutation } from "../containers/RegisterMutation";
import { AppContext } from "../Context";

const NotRegister = () => {
  const { activateAuth } = useContext(AppContext);
  const { registerMutation, error, data, loading } = useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(() => activateAuth());
  };

  const errorMsg = error && "El usuario ya existe o hay algún problema";

  return (
    <>
      <UserForm
        disabled={loading}
        error={errorMsg}
        title="Registrarse"
        onSubmit={onSubmit}
      />
      <UserForm
        disabled={loading}
        error={errorMsg}
        title="Iniciar sesión"
        onSubmit={activateAuth}
      />
    </>
  );
};

export default NotRegister;
