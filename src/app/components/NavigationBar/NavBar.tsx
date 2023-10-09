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
import styles from "./navBarStyle.module.scss";
import strings from "app/constants/strings";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles?.navBar}>
      <h1 className={styles?.myName} onClick={() => navigate(strings?.home)}>
        T
      </h1>
      {
        <ul className={styles?.menu}>
          <li className={styles?.home} onClick={() => navigate(strings?.home)}>
            <FontAwesomeIcon icon={faHome} className={styles?.homeIcon} />
          </li>
          <li
            className={styles?.about}
            onClick={() => navigate(strings?.about)}
          >
            <FontAwesomeIcon icon={faUser} className={styles?.aboutIcon} />
          </li>
          <li
            className={styles?.skills}
            onClick={() => navigate(strings?.skills)}
          >
            <FontAwesomeIcon icon={faCog} className={styles?.techIcon} />
          </li>
          <li className={styles?.work} onClick={() => navigate(strings?.work)}>
            <FontAwesomeIcon icon={faWrench} className={styles?.workIcon} />
          </li>
          <li
            className={styles?.contact}
            onClick={() => navigate(strings?.contact)}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles?.contactIcon}
            />
          </li>
        </ul>
      }
      <ul className={styles?.socialMedia}>
        <li>
          <a
            href="https://github.com/TimAngus321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={githubFilled} />
          </a>
        </li>
        <li>
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
