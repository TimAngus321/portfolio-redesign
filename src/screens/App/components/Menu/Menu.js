import React from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import { routeConstants } from 'shared/constants';

const {
  HOME,
  ABOUT,
  SKILLS,
  WORK,
  CONTACT,
} = routeConstants;

const navItems = [HOME, ABOUT, SKILLS, WORK, CONTACT];

const Menu = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const isExpanded = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to={HOME.route} aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
        <span aria-hidden="true">
         Home
         </span>
      </Link>
      <Link to={ABOUT.route} aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
        <span aria-hidden="true"></span>
        About
      </Link>
      <Link to={SKILLS.route} aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
        <span aria-hidden="true"></span>
        SKILLS
      </Link>
      <Link to={WORK.route} aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
        <span aria-hidden="true"></span>
        WORK
        </Link>
      <Link to={CONTACT.route} aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
        <span aria-hidden="true"></span>
        Contact
        </Link>
       
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Menu;