import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AnimatedTransition from "../../app/components/AnimatedRoutes/AnimatedTransition";
import strings from "../constants/strings";

// Lazy load pages for code splitting
const Home = lazy(() => import("../pages/Home/page/Home"));
const About = lazy(() => import("../pages/About/page/About"));
const Services = lazy(() => import("../pages/Services/page/Services"));
const Skills = lazy(() => import("../pages/Skills/page/Skills"));
const Work = lazy(() => import("../pages/Work/page/Work"));
const Contact = lazy(() => import("../pages/Contact/page/Contact"));

const PageRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default PageRoutes;
