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
            Antes que nada me gustaria presentarme, mi nombre es Jose Martinez
            soy desarrollador Fron-End desde hace aproximandamente dos años. He
            tenido la oportunidad de trabar en varios proyectos, en los cuales
            han sido de gran gartificacion para las personas con las que he
            trabajado. En las oportunidades que he trbajado he trabajado con las
            tecnologias mas usadas en el mundo.
            <br />
            <br />
            Con React.JS (tecnologia con la que esta hecha esta web), haciendo
            un dos CMS conectados con Firebsae trajando con el context que
            proporciona la herramienta. Tambien he tenido la oportunidad de
            hacer un E-commerce como proyecto de estudio, conectado tambien con
            firebase.
            <br />
            <br />
            Con Vue.JS he tenido la oportunidad de crear varios modulos directos
            a produccion de una Blockchain con sockets.io, y realizando la
            construccion de un CMS de dicha Blockchain llamada Central+
            <br />
            <br />
            Tambien tengo conocmientos con JQuery, que a pesar que actualmente
            no es muy demandada, me tome el tiempo para tener los conocimientos
            basicos de dicha libreria. Como modo de practica y profundizar el
            conocimientos hice varias pruebas de landings realizadas en JQuery.
            <br />
            <br />
            Con todas las tecnologias ya mencionadas he trabajado de la mano con
            herramientas como Bootstrap, SCSS, Styled Compontent (React),
            Tailwind CSS y, claramente no puede faltar,Git de forma local y
            GitHub de forma remota.
            <br />
            <br />
            Tengo habilidades fuera del code como:
            <ItemBoxList className="list-disc space-y-5">
              <li>Habilidades para la resolucione de problemas</li>
              <li>Capacidad de analisis</li>
              <li>Trabajo mediante Metodoligas agiles (SCRUM)</li>
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
