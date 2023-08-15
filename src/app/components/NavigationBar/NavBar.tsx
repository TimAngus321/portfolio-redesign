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

function NavBar() {
  const navigate = useNavigate();

  // State not being lifted via hook need to try out useContext (don't use redux super unecessary)
  // const {processing} = useSkills();

  return (
    <nav className={styles?.navBar}>
      <h1 className={styles?.myName} onClick={() => navigate("/")}>
        T
      </h1>
      {
        <ul className={styles?.menu}>
          {/* <li className={styles?.home} onClick={() => processing ? null : navigate("/")}> */}
          <li className={styles?.home} onClick={() => navigate("/")}>

            <FontAwesomeIcon icon={faHome} className={styles?.homeIcon} />
          </li>
          {/* <li className={styles?.about} onClick={() => processing ? null : navigate("/about")}> */}
          <li className={styles?.about} onClick={() =>  navigate("/about")}>

            <FontAwesomeIcon icon={faUser} className={styles?.aboutIcon} />
          </li>
          {/* <li className={styles?.skills} onClick={() => processing ? null : navigate("/skills")}> */}
          <li className={styles?.skills} onClick={() => navigate("/skills")}>

            {/* <FontAwesomeIcon icon={faCog} className={`${styles?.techIcon} ${processing ? 'fa-spin' : null}`} /> */}
            <FontAwesomeIcon icon={faCog} className={styles?.techIcon} />
          </li>
          {/* <li className={styles?.work} onClick={() => processing ? null : navigate("/work")}> */}
          <li className={styles?.work} onClick={() => navigate("/work")}>

            <FontAwesomeIcon icon={faWrench} className={styles?.workIcon} />
          </li>
          {/* <li className={styles?.contact} onClick={() => processing ? null : navigate("/contact")}> */}
          <li className={styles?.contact} onClick={() => navigate("/contact")}>
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
