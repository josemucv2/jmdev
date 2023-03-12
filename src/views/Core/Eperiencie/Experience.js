import React from "react";

import Core from "../../../layouts/Core/Core";
import styled from "styled-components";
import CardExperiencie from "../../../components/CardExperiencie/CardExperiencie";
import { Projects } from "../../../Utils/Data/Technologies";

function Services() {
  return (
    <Core>
      <Section>
        {Projects.map((element) => {
          return (
            <CardExperiencie
              enterprises={element.enterprises}
              id={element._id}
              image={element.image}
              description={element.description}
              url={element.url}
            />
          );
        })}
      </Section>
    </Core>
  );
}

export default Services;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 180px);
  overflow: auto;
`;
