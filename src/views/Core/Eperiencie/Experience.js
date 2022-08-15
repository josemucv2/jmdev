import React from "react";

import Core from "../../../layouts/Core/Core";
import styled from "styled-components";

function Services() {
  return (
    <Core>
      <Section className="fadeInDown">
        <Title>Experiencia Laboral</Title>
        <Parrafo>
          Mi primera Experiencia laboral se enfocó en la realización de una
          Landing Page para una empresa en Argentina, use varias herramientas..
          Principalmente se utilizó JQuery a petición del cliente y yo use
          Herramientas como Bootstrap para la realización de los estilos. Debido
          a que era una página simplemente informativa, no fue requerido
          utilizar herramientas como AJAX para las conexión con algún tipo de
          API.
          <br />
          <br />
          Luego de esa primera experiencia, estuve trabajando con una empresa en
          Guatemala llamada DETRADI, la cual tenía clientes que a veces
          requerían tener un ambiente administrador para la visualización de los
          datos de sus clientes.
          <br />
          <br />
          En esta oportunidad si estuve trabajando con React.js utilizando
          herramientas como Tailwind CSS y SCSS. En este proyecto si requerimos
          utilizar Axios para las peticiones a la API. Este CMS que se realizó
          fue un template general para todos los clientes de la empresa y se iba
          adaptando de acuerdo a las necesidades de cada cliente.
          <br />
          <br />
          Luego de eso, estuve trabajando en una empresa con sede en Venezuela,
          con la tecnología Vue.js, la cual desarrollamos una blockchain operada
          por la Bolsa de Valores Descentralizada de Venezuela. Se pueden
          realizar Intercambio de monedas, Recargas, transferencias a otros
          usuarios.
          <br />
          <br />
          En dicho proyecto estuve realizando cambios repentinos que surgían del
          día a día de la empresa. Y estuve llevando un módulo de notificaciones
          conectado a un socket.io. También realizó varios cambios en el Home de
          la aplicación principal con un diseño proporcionado por el
          departamento de diseño. También fui adaptando por módulos la web en
          responsive.
          <br />
          <br />
          En dicha empresa también estuve trabajando en una aplicación entera,
          haciendo una migración del sistema administrativo de la plataforma
          principal. Para los estilos se usaba Tailwind CSS y SCSS
          <br />
          Pueden visitarlos en:
          <a href="https://app.centralplus.io/"> app.centralplus.io</a>
        </Parrafo>
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
`;
const Parrafo = styled.div`
  font-size: 20px;
  padding: 10px;
  width: 100%;
  height: calc(100vh - 150px);
  overflow: auto;
`;
