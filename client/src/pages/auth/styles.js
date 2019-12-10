import styled from "styled-components";

const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
const green = "#3AAFA9";
const lightGreen = "#DEF2F1";
const white = "#FFF";

// const darkGray = "#0B0C10";
// const mediumGray = "#1F2833";
const otherGreen = "#45A29E";
// const lighterGreen = "#66FCF1";
// const gray = "#C5C6C7";

export const Alert = styled.p`
  background-color: red;
`;

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7vh 5vw;
  height: 100vh;
  background-color: ${darkGreen};
  .border {
    position: relative;
    display: flex;
  }
  .banner {
    background-color: ${green};
    height: 50vh;
    width: 35vw;
    position: absolute;
    padding: 0 3vw;
    z-index: 1;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: left 0.8s ease;

    color: ${white};

    img {
      width: 10vw;
      margin-bottom: 5vh;
    }
    h1 {
      font-weight: 100;
      font-size: 1.8rem;
      margin: 0;
    }
    h2 {
      font-weight: 100;
      font-size: 1rem;
      margin: 0;
      margin-bottom: 5px;
      color: ${darkGreen};
    }
    p {
      color: ${darkGreen};
      font-size: 12px;
      margin-top: 3vh;
    }
    button {
      padding: 5px 20px;
      margin-top: 5px;
      color: ${darkGreen};
    }
    .login {
      text-align: right;
      transition: display 0.8s ease;
    }
    .signup {
      text-align: left;
      transition: display 0.8s ease;
    }
  }

  .authContainer {
    width: 35vw;
    height: 50vh;
    padding: 3vh 3vw;

    background-color: ${white};
  }
`;
