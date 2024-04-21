import "./App.scss";
import NavBar from "./NavigationBar/NavBar";
import Hamburger from "./Hamburger/hamburger-menu";
import { useState } from "react";
import Menu from "./Menu/Menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageRoutes from "../Routes/routes";
import { HelmetProvider } from "react-helmet-async";

const Router = () => {
  const [open, setOpen] = useState(false);
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ToastContainer newestOnTop={true} />
      <NavBar />
      <PageRoutes />
      <div className="mobile-nav">
        <Hamburger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </HelmetProvider>
  );
};

export default Router;
