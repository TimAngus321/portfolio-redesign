import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routeConstants from 'shared/constants/routes';
import './App.scss';
import NavBar from './NavBar'
import Hamburger from './Hamburger/index.js';
import { useState, useRef } from 'react';
import Menu from './Menu/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from '../route';

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
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Route
                path=""
                exact
                render={() => {
                    return (
                      <Redirect to="/home" />
                    )
                }}
              />
            </Switch>

    </BrowserRouter>
      </div>
  )
}

export default Router;
