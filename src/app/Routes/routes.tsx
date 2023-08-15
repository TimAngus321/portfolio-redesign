import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/page/Home";
import About from "../pages/About/page/About";
import Skills from "../pages/Skills/page/Skills";
import Work from "../pages/Work/page/Work";
import Contact from "../pages/Contact/page/Contact";
import AnimatedTransition from "../../app/components/AnimatedRoutes/AnimatedTransition";

const PageRoutes = () => {
  const location = useLocation();

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
        path="/about"
        element={
          <AnimatedTransition>
            <About />
          </AnimatedTransition>
        }
      />
      <Route
        path="/skills"
        element={
          <AnimatedTransition>
            <Skills />
          </AnimatedTransition>
        }
      />
      <Route
        path="/work"
        element={
          <AnimatedTransition>
            <Work />
          </AnimatedTransition>
        }
      />
      <Route
        path="/contact"
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
