import { createRoute } from "..//Utils/Router";
import About from "../views/Core/AboutUs/AboutUs";
import Services from "../views/Core/Eperiencie/Experience";
import Contact from "../views/Core/Contact/Contact";
import Home from "../views/Core/Home/Home";
import Certificated from "../views/Core/Certificated/Certificated.jsx";

const route = [
  createRoute("/", "Home", Home),
  createRoute("/aboutUs", "Sobre Mi", About),
  createRoute("/servicios", "Experiencia", Services),
  createRoute("/contacto", "Contacto", Contact),
  createRoute("/Certificados", "Certificados", Certificated),
];

export default route;
