import React from "react";
import styled from "styled-components";
import Core from "../../layouts/Core/Core";
import ButtonComponent from "../Button/ButtonComponent";
import { useNavigate } from "react-router-dom";

function FixedComponent() {
  const goPage = useNavigate();

  const goAboutUs = () => {
    goPage("/aboutUs");
  };
  return (
    <Core>
      <BoxingHello>
        <Hello>Hola,</Hello>
        <Description>
          soy desarrollador Front End, con experiencia en las tecnologias mas
          usadas en el mundo, React.js y Vue.js
        </Description>
        <div className="w-full flex space-x-5 justify-center">
          <a
            className="mt-10 w-1/2"
            target="_blank"
            href="https://wa.me/+584241449453"
          >
            <ButtonComponent label="Contactame directamente" />
          </a>
          <div className="mt-10 w-1/2">
            <ButtonComponent label="Lee un poco sobre mi" action={goAboutUs} />
          </div>
        </div>
      </BoxingHello>
    </Core>
  );
}

export default FixedComponent;

const Hello = styled.h1`
  width: 100%;
  font-size: 120px;
`;

const Description = styled.p`
  width: 100%;
  font-size: 30px;
`;

const BoxingHello = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  padding-bottom: 20%;
  padding-left: 20%;
  padding-right: 10%;
  height: calc(100vh - 150px);
  overflow: auto;
`;
