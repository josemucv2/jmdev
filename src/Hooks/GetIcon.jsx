import { useRef, useMemo } from "react";
import IconJavascript from "../assets/icons/IconJavaScript.svg";
import IconBootstrap from "../assets/icons/IconBootstrap.svg";
import IconCss from "../assets/icons/IconCss.svg";
import IconDeveloper from "../assets/icons/IconDeveloper.svg";
import IconFigma from "../assets/icons/IconFigma.svg";
import IconFirebase from "../assets/icons/IconFirebase.svg";
import IconGit from "../assets/icons/IconGit.svg";
import IconGitHub from "../assets/icons/IconGitHub.svg";
import IconHtml from "../assets/icons/IconHtml.svg";
import IconJquery from "../assets/icons/IconJquery.svg";
import IconReact from "../assets/icons/IconReact.svg";
import IconScss from "../assets/icons/IconScss.svg";
import IconTailwind from "../assets/icons/IconTailwind.svg";
import IconTypeScript from "../assets/icons/IconTypeScript.svg";
import IconVue from "../assets/icons/IconVue.svg";
import Responsive from "../assets/icons/Responsive.svg";
import BDVE from "../assets/image/BDVE.png";
import Central from "../assets/image/Central.png";
import Detradi from "../assets/image/Detradi.png";
import Sellatuparley from "../assets/image/Sellatuparley.png";
import Login from "../assets/image/Login.png";
import Ecommerce from "../assets/image/Ecommerce.png";
// import IconMongoDB from "../assets/icons/MongoDB.svg";

const useIcons = () => {
  const iconsRef = useRef({
    IconJavascript: IconJavascript,
    IconBootstrap: IconBootstrap,
    IconCss: IconCss,
    IconDeveloper: IconDeveloper,
    IconFigma: IconFigma,
    IconFirebase: IconFirebase,
    IconGit: IconGit,
    IconGitHub: IconGitHub,
    IconHtml: IconHtml,
    IconJquery: IconJquery,
    IconReact: IconReact,
    IconScss: IconScss,
    IconTailwind: IconTailwind,
    IconTypeScript: IconTypeScript,
    IconVue: IconVue,
    Responsive: Responsive,
    BDVE: BDVE,
    Central: Central,
    Detradi: Detradi,
    Sellatuparley: Sellatuparley,
    Login: Login,
    Ecommerce: Ecommerce,
    // IconMongoDB: IconMongoDB,
  });

  const getLabelIcon = useMemo(() => {
    return (value) => {
      console.log(value, "value");
      return iconsRef.current[value];
    };
  }, [iconsRef]);

  return { getLabelIcon };
};

export default useIcons;
