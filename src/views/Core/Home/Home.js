import React from "react";
import Core from "../../../layouts/Core/Core";
import styled from "styled-components";
import Tecnologies from "../../../components/Tecnologies/Tecnologies";
import { TecnologiesArray } from "../../../Utils/Data/Technologies";

function Home() {
  return (
    <Core>
      <div className="flex">
        <Section className="fadeInDown">
          {TecnologiesArray.map((items, index) => {
            return (
              <Tecnologies
                Icons={items.Icons}
                Texts={items.Texts}
                key={index}
              />
            );
          })}
        </Section>
      </div>
    </Core>
  );
}

export default Home;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: calc(100vh - 105px);
  overflow: auto;
`;
