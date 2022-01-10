import React from "react";

import useInputValue from "../../hooks/useInputValue";
import { Button, Error, Form, Input, Title } from "./styles";

const UserForm = ({ title, disabled, onSubmit, error }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          type="email"
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <Button type="submit">{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default UserForm;
