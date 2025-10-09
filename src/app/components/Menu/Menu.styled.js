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
    height: 100vh;
    scroll-behavior: smooth;
    padding: 50px 0;
    vertical-align: top;
    top: 0;
    left: 0;
    position: fixed;
    overflow-y: visible;
  }

  // Landscape mode adjustments
  @media only screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
    width: 100vw;
    height: 100vh;
    padding: 2vh 0;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
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

    // Landscape mode adjustments for menu items
    @media only screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
      font-size: 1.2rem;
      padding: 1vh 0;
      letter-spacing: 0.2rem;
    }
  }
`;

export const MenuItemContainer = styled.div`
  flex-grow: 1; /* This will allow the container to grow and use available space */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */

  // Landscape mode adjustments for container
  @media only screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
    justify-content: center;
    height: 100%;
    padding: 0;
    gap: 0.5vh;
  }
`;
