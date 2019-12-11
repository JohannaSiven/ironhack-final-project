import styled from "styled-components";
const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
// const lightGreen = "#DEF2F1";
export const Nav = styled.div`
  background-color: ${darkGreen};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 0.5px solid ${mediumGreen};
  .navLogo {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: auto;
      margin-left: 4vw;
    }
  }
  .navPages {
    margin-right: 4vw;
    display: flex;
    flex-wrap: wrap;
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      padding: 5px;
      & + a {
        margin-left: 1vw;
      }
    }
  }
`;
