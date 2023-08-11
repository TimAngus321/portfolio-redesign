import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import * as React from "react";
import Home from "../pages/Home/page/Home";
import About from "../pages/About/page/About";
import Skills from "../pages/Skills/page/Skills";
import Work from "../pages/Work/page/Work";
import Contact from "../pages/Contact/page/Contact";
import { AnimatePresence } from "framer-motion";

const PageRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
    path: "/about",
    element: <About />
    }, 
    {
      path: "/skills",
      element: <Skills />
    }, 
    {
      path: "/work",
      element: <Work />
    }, 
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "*",
      element: <Home />
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
    {React.cloneElement(element, { key: location.pathname })}
  </AnimatePresence>
    
      // <Routes location={location} key={location.pathname}>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/skills" element={<Skills />} />
      //   <Route path="/work" element={<Work />} />
      //   <Route path="/contact" element={<Contact />} />
      //   <Route path="*" element={<Home />} />
      // </Routes>
  );
};

export default PageRoutes;
