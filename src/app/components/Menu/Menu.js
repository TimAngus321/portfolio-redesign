import { bool, func } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { useNavigate } from "react-router-dom";

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
      <div
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => mobileTogglePage("/")}
        {...props}
      >
        <span aria-hidden="true">Home</span>
      </div>
      <div
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => mobileTogglePage("/about")}
        {...props}
      >
        <span aria-hidden="true"></span>
        About
      </div>
      <div
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => mobileTogglePage("/skills")}
        {...props}
      >
        <span aria-hidden="true"></span>
        Skills
      </div>
      <div
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => mobileTogglePage("/work")}
        {...props}
      >
        <span aria-hidden="true"></span>
        Work
      </div>
      <div
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => mobileTogglePage("/contact")}
        {...props}
      >
        <span aria-hidden="true"></span>
        Contact
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;
