import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/page/Home";
import About from "../pages/About/page/About";
import Services from "../pages/Services/page/Services";
import Skills from "../pages/Skills/page/Skills";
import Work from "../pages/Work/page/Work";
import Contact from "../pages/Contact/page/Contact";
import AnimatedTransition from "../../app/components/AnimatedRoutes/AnimatedTransition";
import strings from "../constants/strings";

const PageRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <AnimatedTransition>
            <Home />
          </AnimatedTransition>
        }
      />
      <Route
        path={strings?.about}
        element={
          <AnimatedTransition>
            <About />
          </AnimatedTransition>
        }
      />
      <Route
        path={strings?.services}
        element={
          <AnimatedTransition>
            <Services />
          </AnimatedTransition>
        }
      />
      <Route
        path={strings?.skills}
        element={
          <AnimatedTransition>
            <Skills />
          </AnimatedTransition>
        }
      />
      <Route
        path={strings?.work}
        element={
          <AnimatedTransition>
            <Work />
          </AnimatedTransition>
        }
      />
      <Route
        path={strings?.contact}
        element={
          <AnimatedTransition>
            <Contact />
          </AnimatedTransition>
        }
      />
      <Route
        path="*"
        element={
          <AnimatedTransition>
            <Home />
          </AnimatedTransition>
        }
      />
    </Routes>
  );
};

export default PageRoutes;
