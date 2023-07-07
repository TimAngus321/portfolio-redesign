
import './App.scss';
import NavBar from './NavigationBar/NavBar'
import Hamburger from './Hamburger/hamburger-menu';
import { useState, useRef } from 'react';
import Menu from './Menu/Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter} from "react-router-dom";
import PageRoutes from '../Routes/routes';

const Router = () => {

    const [open, setOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
    <ToastContainer />
    <BrowserRouter>
    <NavBar/>
    <PageRoutes />
          <div ref={node} className="mobile-nav">
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
    </BrowserRouter>
      </div>
  )
}

export default Router;
