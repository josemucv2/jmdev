import React from "react";
import styled from "styled-components";

function Tecnologies({ Icons, Texts, Items }) {
  return (
    <Icon>
      <img src={Icons} alt={Texts} />
      <Text>{Texts}</Text>
      {/* <Section className="space-x-2 my-2">
        {1 <= Items ? <CircleBack /> : <Circle />}
        {2 <= Items ? <CircleBack /> : <Circle />}
        {3 <= Items ? <CircleBack /> : <Circle />}
        {4 <= Items ? <CircleBack /> : <Circle />}
        {5 <= Items ? <CircleBack /> : <Circle />}
      </Section> */}
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

const CircleBack = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 1rem;

  background-color: white;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 1rem;
  background-color: transparent;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
