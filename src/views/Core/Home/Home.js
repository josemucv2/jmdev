import React from "react";
import Core from "../../../layouts/Core/Core";
import styled from "styled-components";
import Tecnologies from "../../../components/Tecnologies/Tecnologies";
import IconBootstrap from "../../../assets/icons/IconBootstrap.svg";
import IconCss from "../../../assets/icons/IconCss.svg";
import IconFirebase from "../../../assets/icons/IconFirebase.svg";
import IconGit from "../../../assets/icons/IconGit.svg";
import IconGitHub from "../../../assets/icons/IconGitHub.svg";
import IconHtml from "../../../assets/icons/IconHtml.svg";
import IconJavaScript from "../../../assets/icons/IconJavaScript.svg";
import IconReact from "../../../assets/icons/IconReact.svg";
import IconScss from "../../../assets/icons/IconScss.svg";
import IconVue from "../../../assets/icons/IconVue.svg";
import IconTailwind from "../../../assets/icons/IconTailwind.svg";
import IconJQuery from "../../../assets/icons/IconJquery.svg";
import Responsive from "../../../assets/icons/Responsive.svg";
import IconTypeScript from "../../../assets/icons/IconTypeScript.svg";
import IconFigma from "../../../assets/icons/IconFigma.svg";
function Home() {
  const TecnologiesArray = [
    { id: 1, Icons: IconHtml, Texts: "HTML5", Items: 5 },
    { id: 2, Icons: IconCss, Texts: "CSS3", Items: 5 },
    { id: 3, Icons: IconJavaScript, Texts: "JavaScript", Items: 4 },
    { id: 4, Icons: IconVue, Texts: "Vue", Items: 4 },
    { id: 5, Icons: IconReact, Texts: "React", Items: 4 },
    { id: 9, Icons: IconGit, Texts: "Git", Items: 4 },
    { id: 10, Icons: IconGitHub, Texts: "Git Hub", Items: 3 },
    { id: 6, Icons: IconTailwind, Texts: "Tailwind CSS", Items: 4 },
    { id: 7, Icons: IconBootstrap, Texts: "Bootstrap CSS", Items: 5 },
    { id: 8, Icons: IconScss, Texts: "SCSS", Items: 3 },
    { id: 11, Icons: IconJQuery, Texts: "J Query", Items: 3 },
    { id: 13, Icons: Responsive, Texts: "Responsive", Items: 4 },
    { id: 12, Icons: IconFirebase, Texts: "Firebase", Items: 2 },
    { id: 15, Icons: IconFigma, Texts: "Figma", Items: 2 },
    { id: 14, Icons: IconTypeScript, Texts: "TypeScript", Items: 1 },
  ];

  return (
    <Core>
      <div className="flex">
        <Section className="fadeInDown">
          {TecnologiesArray.map((items, index) => {
            return (
              <Tecnologies
                Icons={items.Icons}
                Texts={items.Texts}
                Items={items.Items}
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
