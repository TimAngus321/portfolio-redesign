import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faEnvelope,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import githubFilled from "@iconify/icons-codicon/github-inverted";
import linkedinRect from "@iconify/icons-brandico/linkedin-rect";
import styles from './navBarStyle.module.scss';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles?.navBar}>
      <h1 className={styles?.myName} onClick={() => navigate("/")}>
        T
      </h1>
      {
        <ul className={styles?.menu}>
          <li className={styles?.home} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHome} className={styles?.homeIcon} />
          </li>
          <li className={styles?.about} onClick={() => navigate("/about")}>
            <FontAwesomeIcon icon={faUser} className={styles?.aboutIcon} />
          </li>
          <li className={styles?.skills} onClick={() => navigate("/skills")}>
            <FontAwesomeIcon icon={faCog} className={styles?.techIcon} />
          </li>
          <li className={styles?.work} onClick={() => navigate("/work")}>
            <FontAwesomeIcon icon={faWrench} className={styles?.workIcon} />
          </li>
          <li className={styles?.contact} onClick={() => navigate("/contact")}>
            <FontAwesomeIcon icon={faEnvelope} className={styles?.contactIcon} />
          </li>
        </ul>
      }
      <ul className={styles?.socialMedia}>
        <li className={styles?.github}>
          <a
            href="https://github.com/TimAngus321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={githubFilled} />
          </a>
        </li>
        <li className="linkedin">
          <a
            href="https://www.linkedin.com/in/timothy-angus-b94969113/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={linkedinRect} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
