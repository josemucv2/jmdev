import React from "react";
import { Core, Description, TitleProject } from "./CardStyle";
import useIcons from "../../Hooks/GetIcon";
import ButtonComponent from "../Button/ButtonComponent";

function CardExperiencie({ id, enterprises, description, image, url }) {
  const { getLabelIcon } = useIcons();

  const goPage = (value) => {
    window.open(value, "_blank");
  };
  return (
    <Core>
      <TitleProject className="mt-3">
        Proyecto {id} <br />
        {enterprises}
      </TitleProject>
      <img src={getLabelIcon(image)} alt="" className="mt-3" />
      <Description>{description}</Description>
      <div className="px-10 my-3">
        <ButtonComponent label="Ver Proyecto" action={() => goPage(url)} />
      </div>
    </Core>
  );
}

export default CardExperiencie;
