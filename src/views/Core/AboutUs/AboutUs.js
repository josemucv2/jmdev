import React from "react";
import styled from "styled-components";
import Core from "../../../layouts/Core/Core";

function AboutUs() {
  return (
    <Core>
      <div className="flex">
        <Section className="fadeInDown">
          <Title>Espero te encuentras bien</Title>
          <Parrafo>
            Hola, mi nombre es Jose Martinez y soy un desarrollador front end
            especializado en React y Vue. He trabajado en varios proyectos
            personales y profesionales, lo que me ha permitido desarrollar
            habilidades sólidas en JavaScript, TypeScript, jQuery, Firebase,
            Git, Github, Netlify, HTML, CSS, Tailwind, SCSS y otras herramientas
            importantes.
            <br />
            <br />
            En mi carrera, he tenido la oportunidad de trabajar en el backend
            usando Node.js y Express.js en algunas ocasiones, lo que me ha
            brindado una perspectiva completa sobre el proceso de desarrollo de
            aplicaciones web.
            <br />
            <br />
            Con tres años de experiencia en el desarrollo front end, me
            considero un profesional dedicado y apasionado por mi trabajo. Me
            encanta trabajar en equipo y tengo la capacidad de comunicar mis
            ideas de manera clara y efectiva.
            <br />
            <br />
            Si estás buscando un desarrollador front end que pueda ofrecer
            resultados de alta calidad en tus proyectos, no dudes en
            contactarme. Estoy seguro de que puedo ayudarte a hacer realidad tus
            ideas y llevar tu negocio al siguiente nivel.
            <br />
            <br />
            Tengo habilidades fuera del code como:
            <ItemBoxList className="list-disc space-y-5">
              <li>Habilidades para la resolución de problemas</li>
              <li>Capacidad de análisis</li>
              <li>Trabajo mediante Metodologías ágiles (SCRUM)</li>
              <li>Trabajo en equipo</li>
            </ItemBoxList>
            <br />
            Gracias por tomarte el tiempo de leerme un poco...
          </Parrafo>
        </Section>
      </div>
    </Core>
  );
}

export default AboutUs;
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
`;

const Parrafo = styled.div`
  font-size: 20px;
  padding: 10px;
  width: 100%;
  height: calc(100vh - 150px);
  overflow: auto;
`;

const ItemBoxList = styled.ul`
  margin-left: 25px;
  margin-top: 10px;
`;
