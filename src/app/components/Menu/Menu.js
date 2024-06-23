import { bool, func } from "prop-types";
import { StyledMenu, MenuItemContainer } from "./Menu.styled";
import { useNavigate } from "react-router-dom";
import strings from "app/constants/strings";

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
      </MenuItemContainer>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;
