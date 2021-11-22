import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from 'screens/App';
import Home from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/Home/components/Home.js';
import NotFound from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/components/NotFound.js';
import About from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/About/components/About.js';
import Contact from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/Contact/components/Contact.js';
import Skills from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/Skills/components/Skills.js';
import Work from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/screens/App/screens/Work/components/Work.js';

import routeConstants from 'shared/constants/routes';
import './App.scss';
import NavBar from './NavBar'
import Hamburger from './Hamburger/index.js';
import { useState, useRef } from 'react';
import Menu from './Menu/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {
    HOME,
    ABOUT,
    SKILLS,
    WORK,
    CONTACT,
  } = routeConstants;

    const navItems = [HOME, ABOUT, SKILLS, WORK, CONTACT];


const Router = () => {

    const [open, setOpen] = useState(false);
    const node = useRef(); 

  return (
    <div className="App">
    <ToastContainer />
    <BrowserRouter>
    <NavBar navItems={navItems} />
          <div ref={node} className="mobile-nav">
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>  
        <Switch>
            <Route exact path="/" component={App} render={() => {
                    return (
                      <Redirect to="/home" />
                    )
                }} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/work" component={Work} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
      </div>
  )
}

export default Router;

