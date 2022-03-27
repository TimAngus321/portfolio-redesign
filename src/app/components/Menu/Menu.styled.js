import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
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
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    position: fixed;
    min-height: 100vh;
    padding: 25px 0;
    height: 100vh;
  }
  a {
    position: relative;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 20px 0;
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
      color: #bd4517;
    }
  }
`;
