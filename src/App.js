import { BrowserRouter } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import RouterView from "./router/router";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import FixedComponent from "./components/FixedComponent/FixedComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <div className="md:flex">
        <SectionComponent className="SectionResponsive">
          <FixedComponent />
        </SectionComponent>
        <SectionRouter className="SectionResponsive">
          <RouterView />
        </SectionRouter>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

const SectionComponent = styled.div`
  width: 50%;
  background-color: rgba(0, 0, 0, 0.247) !important;
 
`;

const SectionRouter = styled.div`
  width: 50%;
  background-color: rgba(0, 0, 0, 0.247) !important;
`;
