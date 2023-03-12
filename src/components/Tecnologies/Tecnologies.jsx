import React from "react";
import styled from "styled-components";
import useIcons from "../../Hooks/GetIcon";

function Tecnologies({ Icons, Texts }) {
  const { getLabelIcon } = useIcons();
  return (
    <Icon>
      <img src={getLabelIcon(Icons)} alt={Texts} />
      <Text>{Texts}</Text>
    </Icon>
  );
}

export default Tecnologies;

const Icon = styled.div`
  width: 150px;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 10px;
  margin: 15px;
`;

const Text = styled.div`
  text-align: center;
`;
