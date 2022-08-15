import React from "react";

import Core from "../../../layouts/Core/Core";
import styled from "styled-components";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
import IconJavaScript from "../../../assets/icons/IconJavaScript.svg";
import IconReact from "../../../assets/icons/IconReact.svg";
import IconDeveloper from "../../../assets/icons/IconDeveloper.svg";

function Certificated() {
  const Certificated = [
    {
      id: 3,
      name: "Desarrollo Web",
      href: "https://latam.coderhouse.com/certificados/6130e1c8b05a7a00115695c8",
      Icon: IconDeveloper,
    },
    {
      id: 1,
      name: "JavaScritp",
      href: "https://latam.coderhouse.com/certificados/618feed74bd4ae00271927b5",
      Icon: IconJavaScript,
    },
    {
      id: 2,
      name: "React.js",
      href: "https://latam.coderhouse.com/certificados/6213cd53adfa9b003f5bd763",
      Icon: IconReact,
    },

    {
      id: 4,
      name: "Dev. Front End",
      href: "https://latam.coderhouse.com/certificados/62578aa4bcf2cf0019a13ed5",
      Icon: IconDeveloper,
    },
  ];

  return (
    <Core>
      <Title>Certificados de estudios</Title>
      <div className="flex">
        <Section className="fadeInDown">
          {Certificated.map((element, index) => {
            return (
              <SocialMedia
                Icon={element.Icon}
                name={element.name}
                key={index}
                href={element.href}
              />
            );
          })}
        </Section>
      </div>
    </Core>
  );
}

export default Certificated;

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
  padding: 20px;
  height: calc(100vh - 150px);
  overflow: auto;
`;
