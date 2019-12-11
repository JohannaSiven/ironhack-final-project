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
  color: red;
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
  }
  .login {
    text-align: right;
    transition: display 0.8s ease;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      h2 {
        text-align: center;
        margin: 3vh 0;
      }
      div {
        margin: 2vh 0;
      }
      button {
        color: ${mediumGreen};
        padding: 10px 20px;
        background-color: ${white};
        border: 1px solid ${mediumGreen};
        margin: 2vh 0 1vh;
      }
      button:hover {
        color: ${white};
        padding: 10px 20px;
        background-color: ${mediumGreen};
      }
      .linkedin {
        font-size: 2rem;
        display: flex;
        justify-content: flex-end;
        span {
          color: ${mediumGreen};
          font-size: 0.7rem;
          margin-right: 3px;
        }
        a {
          color: ${mediumGreen};
        }
        a:hover {
          color: ${green};
        }
      }
    }
    .role {
      margin: 1vh;
      text-align: left;
    }
  }
  .signup {
    text-align: left;
    transition: display 0.8s ease;
  }

  .authContainer {
    width: 35vw;
    height: 50vh;
    padding: 3vh 3vw;

    background-color: ${white};
  }

  .inp {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 280px;

    .label {
      position: absolute;
      top: 5px;
      left: 0;
      font-size: 12px;
      color: ${green};
      font-weight: 500;
      transform-origin: 0 0;
      transition: all 0.6s ease;
    }
    .border {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background: ${mediumGreen};
      transform: scaleX(0);
      transform-origin: 0 0;
      transition: all 1s ease;
    }
    input {
      width: 100%;
      border: 0;
      font-family: inherit;
      padding: 12px 0;
      height: 0px;
      font-size: 16px;
      font-weight: 500;
      border-bottom: 2px solid #c8ccd4;
      background: none;
      border-radius: 0;
      color: ${darkGreen};
      transition: all 1s ease;
      &:hover {
        background: rgba(${darkGreen}, 0.03);
      }
      &:not(:placeholder-shown) {
        + span {
          color: #5a667f;
          transform: translateY(0) scale(0.75);
        }
      }
      &:focus {
        background: none;
        outline: none;
        + span {
          color: ${mediumGreen};
          transform: translateY(-26px) scale(0.75);
          + .border {
            transform: translateY(+6px) scaleX(1);
          }
        }
      }
    }
  }
`;
