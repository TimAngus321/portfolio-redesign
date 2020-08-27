import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, fab } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope, faWrench  } from '@fortawesome/free-solid-svg-icons';
import { Icon, InlineIcon } from '@iconify/react';
import githubFilled from '@iconify/icons-codicon/github-inverted';
import linkedinRect from '@iconify/icons-brandico/linkedin-rect';
import { routeConstants } from 'shared/constants';

const {
    HOME,
    ABOUT,
    SKILLS,
    WORK,
    CONTACT,
  } = routeConstants;

const navItems = [HOME, ABOUT, SKILLS, WORK, CONTACT];


function NavBar() {
    return <nav className="navBar">
    <Link to={HOME.route}>
        <h1 className="myName">T</h1>
     </Link>
        {
                <ul className="menu">
                    <Link to={HOME.route}>
                        <li className="home">
                            <FontAwesomeIcon icon={faHome} className="home-icon"/>
                        </li>
                    </Link>
                    <Link to={ABOUT.route}>
                        <li className="about"> 
                            <FontAwesomeIcon icon={faUser} className="about-icon" />
                        </li>
                    </Link>
                    <Link to={SKILLS.route}>
                        <li className="skills">
                            <FontAwesomeIcon icon={faCog} className="tech-icon" spin/>
                        </li>
                    </Link>
                    <Link to={WORK.route}>
                    <li className="work">
                        <FontAwesomeIcon icon={faWrench} className="work-icon" />
                    </li>
                    </Link>
                    <Link to={CONTACT.route}>
                        <li className="contact">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />                     
                        </li>
                    </Link>
                </ul>
        }
        <ul className="social-media">
                        <li className="github">
                            <a href="https://github.com/TimAngus321" target="_blank">
                                <Icon icon={githubFilled} className="github-icon"/>  
                            </a> 
                        </li>
                        <li className="linkedin">
                            <a href="https://www.linkedin.com/in/timothy-angus-b94969113/" target="_blank">
                                <Icon icon={linkedinRect} className="linkedIn-icon" />
                            </a>
                        </li>
                    </ul>
   </nav>
}

export default NavBar;
