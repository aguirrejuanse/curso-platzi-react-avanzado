import React from "react";

import useInputValue from "../../hooks/useInputValue";
import { Button, Form, Input, Title } from "./styles";

const UserForm = ({ title, onSubmit }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Email" {...email} />
        <Input placeholder="Password" type="password" {...password} />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};

export default UserForm;
