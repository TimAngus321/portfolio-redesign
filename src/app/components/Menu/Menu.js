import { bool, func } from "prop-types";
import { StyledMenu, MenuItemContainer } from "./Menu.styled";
import { useNavigate } from "react-router-dom";
import strings from "app/constants/strings";
import { Icon } from "@iconify/react";
import githubFilled from "@iconify/icons-codicon/github-inverted";
import linkedinRect from "@iconify/icons-brandico/linkedin-rect";

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const isExpanded = open ? true : false;

  const navigate = useNavigate();

  const mobileTogglePage = (page) => {
    setOpen(!open);
    navigate(page);
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <MenuItemContainer>
        <div
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => mobileTogglePage(strings?.home)}
          {...props}
        >
          <span aria-hidden="true">Home</span>
        </div>
        <div
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => mobileTogglePage(strings?.about)}
          {...props}
        >
          <span aria-hidden="true"></span>
          About
        </div>
        <div
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => mobileTogglePage(strings?.services)}
          {...props}
        >
          <span aria-hidden="true"></span>
          Services
        </div>
        <div
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => mobileTogglePage(strings?.skills)}
          {...props}
        >
          <span aria-hidden="true"></span>
          Skills
        </div>
        <div
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => mobileTogglePage(strings?.work)}
          {...props}
        >
          <span aria-hidden="true"></span>
          Work
        </div>
        <div
          aria-label="Toggle menu"
          aria-expanded={isExpanded}
          open={open}
          onClick={() => mobileTogglePage(strings?.contact)}
          {...props}
        >
          <span aria-hidden="true"></span>
          Contact
        </div>
        <ul>
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
      </MenuItemContainer>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;
