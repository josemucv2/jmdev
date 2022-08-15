import About from "../views/Core/AboutUs/AboutUs";
import Services from "../views/Core/Eperiencie/Experience";
import Contact from "../views/Core/Contact/Contact";
import Home from "../views/Core/Home/Home";
import Certificated from "../views/Core/Certificated/Certificated.jsx";

const route = [
  {
    path: "/",
    name: "Home",
    element: Home,
  },

  {
    path: "/aboutUs",
    name: "Sobre mi",
    element: About,
  },

  {
    path: "/servicios",
    name: "Experiencia",
    element: Services,
  },
  {
    path: "/contacto",
    name: "Contacto",
    element: Contact,
  },

  {
    path: "/Certificados",
    name: "Certificados",
    element: Certificated,
  },
];

export default route;
