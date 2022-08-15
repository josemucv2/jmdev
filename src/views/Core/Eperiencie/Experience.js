import React from "react";

import Core from "../../../layouts/Core/Core";
import styled from "styled-components";

function Services() {
  return (
    <Core>
      <Section className="fadeInDown">
        <Title>Experiencia Laboral</Title>
        <Parrafo>
          Mi primera Experieincia laboral se enfoco en la realizacion de una
          Landing Page para una empresa en Argentina, use varias herramientas..
          Principalmente se utilizo JQuery a peticion del cliente y yo use
          Herramientas como Bootstrap para la realizacion de los estilos. Debido
          a que era una pagina simplemente informativa, no fue requerido
          utilizar herramientas como AJAX para las conexion con algun tipo de
          API.
          <br />
          <br />
          Luego de esa primera experiencia, estuve trabajando con una empresa en
          Guatemala llamada DETRADI, la cual tenia clientes que a veces
          requerian tener un ambiente administrador para la visualizacion de los
          datos de sus clientes.
          <br />
          <br />
          En esta oportunidad si estuve trabajando con React.js utilizando
          herramientas como Tailwind CSS y SCSS. En este proyecto si requeriamos
          utilizar Axios para la peticiones a la API. Ese CMS que se realizao
          fue un template general para todos los clientes de la empresay se iba
          adaptando de acuerdo a las necesidades de cada cliente.
          <br />
          <br />
          Luego de eso, estuve trabajando en una empresa con sede en Venezuela,
          con la tecnologia Vue.js, la cual desarrollamos una blockchain operada
          por la Bolsa de Valores Descentralizada de Venezuela. Se pueden
          realizar Intercambio de monedas, Recargas, transferencias a otros
          usuarios.
          <br />
          <br />
          En dicho proyecto estuve realizando cambios repentinos que surgian del
          dia a dia de la empresa. Y estuve llevando un modulo de notificaciones
          conectado a un socket.io. Tambien realice varios cambios en el Home de
          la aplicacion principal con un diseño proporcionado por el
          departamento de diseño. Tambien fui adaptando por modulos la web en
          responsive.
          <br />
          <br />
          En dicha empresa tambien estuve trabajando en una aplicacion entera,
          haciendo una migracion del sistema administrativo de la plataforma
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
