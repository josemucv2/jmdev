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
            Antes que nada me gustaría presentarme, mi nombre es Jose Martinez
            soy desarrollador Front-End desde hace aproximadamente dos años. He
            tenido la oportunidad de trabajar en varios proyectos, en los cuales
            han sido de gran gratificación para las personas con las que he
            trabajado. He tenido la gran satisfacción de trabajar con las
            tecnologías más usadas en el mundo.
            <br />
            <br />
            Con React.JS (tecnología con la que está hecha esta web), haciendo
            un dos CMS conectados con Firebase trabajando con el context que
            proporciona la herramienta. También he tenido la oportunidad de
            hacer un E-commerce como proyecto de estudio, conectado también con
            Firebase.
            <br />
            <br />
            Con Vue.JS he tenido la oportunidad de crear varios módulos directos
            a producción de una Blockchain con sockets.io, y realizando la
            construcción de un CMS de dicha Blockchain llamada Central+
            <br />
            <br />
            También tengo conocimientos con JQuery, que a pesar que actualmente
            no es muy demandada, me tome el tiempo para tener los conocimientos
            básicos de dicha librería. Como modo de práctica y profundizar los
            conocimientos hice varias pruebas de landings realizadas en JQuery.
            <br />
            <br />
            Con todas las tecnologías ya mencionadas he trabajado de la mano con
            herramientas como Bootstrap, SCSS, Styled Compontent (React),
            Tailwind CSS y, claramente no puede faltar,Git de forma local y
            GitHub de forma remota.
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
