import React from "react";
import styled from "styled-components";

function Core({ children }) {
  return (
    <div>
      <Body>{children}</Body>
    </div>
  );
}

export default Core;

const Body = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
`;
