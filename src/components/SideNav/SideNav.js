import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import route from "../../router/route";
import IconMenu from "../../assets/icons/IconMenu.svg";
import { useState } from "react";

function SideNav() {
  const [openMain, setOpenMain] = useState(false);
  const location = useLocation();
  const openClose = () => {
    setOpenMain(!openMain);
  };

  return (
    <SideNavContainer className="flex justify-between w-full h-20">
      <div className="style-logo pt-4 mx-20">
        <Parrafo>Jose Martinez</Parrafo>
      </div>

      <BoxingMain className="mainClosed">
        <div onClick={openClose}>
          <img src={IconMenu} alt="" />
        </div>
      </BoxingMain>
      {openMain === true ? (
        <OpenMain classMame="mainClosed">
          {route.map((element, index) => {
            return (
              <ItemsListResponsive key={index}>
                <NavLink to={element.path}>
                  <ItemLinkResponsive>{element.name}</ItemLinkResponsive>
                </NavLink>
              </ItemsListResponsive>
            );
          })}
        </OpenMain>
      ) : (
        ""
      )}

      <ul className="pt-4 mx-20 flex space-x-10 mainOpen">
        {route.map((element, index) => {
          return (
            <ItemsList key={index}>
              <NavLink to={element.path}>
                <ItemsLink
                  className={
                    location.pathname === element.path ? "isActive" : ""
                  }
                >
                  {element.name}
                </ItemsLink>
              </NavLink>
            </ItemsList>
          );
        })}
      </ul>
    </SideNavContainer>
  );
}

export default SideNav;

const BoxingMain = styled.div`
  width: 20%;
  height: 75px;
  border: 1px solid white;
`;

const ItemsListResponsive = styled.div`
  width: 100%;
  text-align: center;
`;

const ItemLinkResponsive = styled.div`
  width: 85%;
  background-color: rgba(255, 255, 255, 0.247);

  color: white;
  margin: 5px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 12px;
  border-radius: 8px;
`;

const ItemsList = styled.li`
  color: white;
`;

const ItemsLink = styled.div`
  &:hover {
    text-decoration: underline;
  }
`;
const Parrafo = styled.p`
  font-size: 18px;
`;

const SideNavContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.247) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.274);
`;

const OpenMain = styled.ul`
  width: 150px;
  height: 180px;
  border: 1px solid white;
  border-radius: 8px;
  position: absolute;
  right: 20px;
  top: 85px;
`;
