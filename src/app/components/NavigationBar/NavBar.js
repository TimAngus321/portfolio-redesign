import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope, faWrench  } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import githubFilled from '@iconify/icons-codicon/github-inverted';
import linkedinRect from '@iconify/icons-brandico/linkedin-rect';


function NavBar() {

    const navigate = useNavigate();

    return (
    <nav className="navBar">
    <h1 className="myName" onClick={() => navigate('/')}>T</h1>
        {
                <ul className="menu">
                        <li className="home" onClick={() => navigate('/')}>
                            <FontAwesomeIcon icon={faHome} className="home-icon"/>
                        </li>
                        <li className="about" onClick={() => navigate('/about')}> 
                            <FontAwesomeIcon icon={faUser} className="about-icon" />
                        </li>
                        <li className="skills" onClick={() => navigate('/skills')}>
                            <FontAwesomeIcon icon={faCog} className="tech-icon" />
                        </li>
                        <li className="work" onClick={() => navigate('/work')}>
                            <FontAwesomeIcon icon={faWrench} className="work-icon" />
                        </li>
                        <li className="contact" onClick={() => navigate('/contact')}>
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />                     
                        </li>
                </ul>
        }
        <ul className="social-media">
                        <li className="github">
                            <a href="https://github.com/TimAngus321" target="_blank" rel="noopener noreferrer">
                                <Icon icon={githubFilled} className="github-icon"/>  
                            </a> 
                        </li>
                        <li className="linkedin">
                            <a href="https://www.linkedin.com/in/timothy-angus-b94969113/" target="_blank" rel="noopener noreferrer">
                                <Icon icon={linkedinRect} className="linkedIn-icon" />
                            </a>
                        </li>
                    </ul>
   </nav>
    )
}

export default NavBar;
