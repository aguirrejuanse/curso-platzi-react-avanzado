import React, { useContext } from "react";

import UserForm from "../components/UserForm";
import { useLoginMutation } from "../containers/LoginMutation";
import { useRegisterMutation } from "../containers/RegisterMutation";
import { AppContext } from "../Context";

const NotRegister = () => {
  const { activateAuth } = useContext(AppContext);
  const {
    registerMutation,
    error: errorRegister,
    loading: loadingRegister,
  } = useRegisterMutation();
  const {
    loginMutation,
    error: errorLogin,
    loading: loadingLogin,
  } = useLoginMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable })
      .then(() => activateAuth())
      .catch((err) => console.log(err));
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables })
      .then(() => activateAuth())
      .catch((err) => console.log(err));
  };

  const errorMsgRegister =
    errorRegister && "El usuario ya existe o hay algún problema";

  const errorMsgLogin =
    errorLogin && "El usuario no existe o hay algun problema";

  return (
    <>
      <UserForm
        disabled={loadingRegister}
        error={errorMsgRegister}
        title="Registrarse"
        onSubmit={onSubmitRegister}
      />
      <UserForm
        disabled={loadingLogin}
        error={errorMsgLogin}
        title="Iniciar sesión"
        onSubmit={onSubmitLogin}
      />
    </>
  );
};

export default NotRegister;
