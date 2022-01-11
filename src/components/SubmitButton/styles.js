import styled from "styled-components";

export const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;

  & [disabled] {
    opacity: 0.3;
  }
`;
