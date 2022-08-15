import React from "react";
import styled from "styled-components";

function ButtonComponent({ label, action }) {
  return <Button onClick={action}>{label}</Button>;
}

export default ButtonComponent;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 8px;
  width: 100%;
  padding: 5px;

  &:hover {
    background-color: white;
    border: 1px solid rgba(66, 66, 66, 0.445);

    color: black;
    box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.842);
  }
`;
