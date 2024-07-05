import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 auto;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100%;
  width: 100%;
  padding-top: 20px;
  background-color: black;
  text-align: center;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 900px) {
    width: 100vw;
    scroll-behavior: smooth;
    padding: 25px 0;
    vertical-align: top;
    min-height: 100vh;
    height: 100vh;
    top: 0;
    left:0;
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
  }
  div {
    position: relative;
    font-size: 6vw;
    text-transform: uppercase;
    padding: 2.5vh 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    ${"" /* color: ${({ theme }) => theme.primaryDark}; */}
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #00fff0;
    }
  }
`;

export const MenuItemContainer = styled.div`
  flex-grow: 1; /* This will allow the container to grow and use available space */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
`;
