import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const SubmitButton = ({ children, onClick, disabled }) => (
  <Button disabled={disabled} onClick={onClick}>
    {children}
  </Button>
);

export default SubmitButton;

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
