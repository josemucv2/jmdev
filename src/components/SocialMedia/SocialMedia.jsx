import React from "react";

import styled from "styled-components";

function SocialMedia({ href, Icon, name }) {
  return (
    <BoxingSocial>
      <a target="_blank" href={href}>
        <img src={Icon} alt="" />
        <Text>{name}</Text>
      </a>
    </BoxingSocial>
  );
}

export default SocialMedia;

const Text = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const BoxingSocial = styled.div`
  width: 150px;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 10px;
  margin: 15px;

  &:hover {
    transform: scale(1.1);
  }
`;
