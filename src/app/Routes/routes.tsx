import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/page/Home";
import About from "../pages/About/page/About";
import Skills from "../pages/Skills/page/Skills";
import Work from "../pages/Work/page/Work";
import Contact from "../pages/Contact/page/Contact";
import { AnimatePresence } from "framer-motion";

const PageRoutes = () => {
  const location = useLocation();

  return (
    // <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    // </AnimatePresence>
  );
};

export default PageRoutes;
