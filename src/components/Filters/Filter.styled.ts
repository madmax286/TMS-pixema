import styled from "styled-components";
// import { colors } from "../../global";

export const StyledFilter = styled.nav<{ open: boolean, theme: 'light' | 'dark' }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 32vw;
  border-radius: 10px;
  padding: 30px;
  position: fixed;
  background-color: ${({theme}) => theme === 'dark' ? 'rgb(43, 43, 43)' : '#242426'};
  z-index: 15;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-between;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};  

  span {
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const StyledLink = styled.a<{theme: 'light' | 'dark'}>`
  padding: 0;
  font-size: 2rem;
  text-decoration: none;
  width: 100%;
  text-align: center;
  color: ${({theme}) => theme === 'dark' ? 'rgb(43, 43, 43)' : 'rgb(237, 237, 237)'};

    &:hover {
      background-color: rgb(237, 237, 237);
    }
`
export const StyledMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`
export const StyledMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`