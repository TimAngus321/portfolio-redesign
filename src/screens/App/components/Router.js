import React, {useEffect} from 'react';
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
// import base from '/Users/timothyangus/code/TimAngus321/personal-projects/portfolio-redesign/src/base.js'

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

    // useEffect (() => {
    //     this.ref = base.syncState()
    // }, [])

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
            <Route exact path="/portfolio-redesign/" component={App} render={() => {
                    return (
                      <Redirect to="/portfolio-redesign/home" />
                    )
                }} />
            <Route path="/portfolio-redesign/home" component={Home} />
            <Route path="/portfolio-redesign/about" component={About} />
            <Route path="/portfolio-redesign/contact" component={Contact} />
            <Route path="/portfolio-redesign/skills" component={Skills} />
            <Route path="/portfolio-redesign/work" component={Work} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
      </div>
  )
}

export default Router;

