import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faEnvelope,
  faWrench,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import githubFilled from "@iconify/icons-codicon/github-inverted";
import linkedinRect from "@iconify/icons-brandico/linkedin-rect";
import styles from "./navBarStyle.module.scss";
import strings from "app/constants/strings";
import { Player } from "@lordicon/react";
import useNavbar from "../Hooks/useNavbar";

function NavBar() {
  const navigate = useNavigate();
  const codeIcon = require("../../../assets/Icons/codeIcon.json");
  const { onHover, playerRef } = useNavbar();

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
            className={styles?.services}
            onClick={() => navigate(strings?.services)}
          >
            <FontAwesomeIcon icon={faCog} className={styles?.servicesIcon} />
          </li>
          <li
            className={styles?.skills}
            onClick={() => navigate(strings?.skills)}
            onMouseOver={() => onHover()}
          >
            <div className={styles?.skillsIcon}>
              <Player colorize={"#fff"} size={26} ref={playerRef} icon={codeIcon} />
            </div>
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
            aria-label="Link to Timothy Angus's Github Account"
          >
            <Icon icon={githubFilled} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/timothy-angus-b94969113/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Timothy Angus's LinkedIn Account"
          >
            <Icon icon={linkedinRect} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
