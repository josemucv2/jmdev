import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterComponent>Jose Martinez &copy; copyright</FooterComponent>;
}

export default Footer;

const FooterComponent = styled.footer`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.247) !important;
  border-top 1px solid rgba(255, 255, 255, 0.274);
`;
