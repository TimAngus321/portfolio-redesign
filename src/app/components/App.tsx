import "./App.scss";
import NavBar from "./NavigationBar/NavBar";
import Hamburger from "./Hamburger/hamburger-menu";
import { useState, useRef } from "react";
import Menu from "./Menu/Menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "../Routes/routes";
import { HelmetProvider } from "react-helmet-async";

const Router = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const helmetContext = {};

  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
        <ToastContainer />
        <BrowserRouter>
          <NavBar />
          <PageRoutes />
          <div ref={node} className="mobile-nav">
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
};

export default Router;
