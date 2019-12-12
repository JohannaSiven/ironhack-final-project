import styled from "styled-components";

const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
const green = "#3AAFA9";
const lightGreen = "#DEF2F1";
const white = "#FFF";

const darkGray = "#0B0C10";
const mediumGray = "#1F2833";
const otherGreen = "#45A29E";
const lighterGreen = "#66FCF1";
const gray = "#C5C6C7";

export const Container = styled.div`
  .rightSide {
    text-align: right;
    position: relative;
  }
  .rightSide:before {
    content: "";
    position: absolute;
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: ${white} transparent;
    top: 7px;
    right: 0;
    transform: rotate(90deg);
  }
  .leftSide {
    text-align: left;
    position: relative;
  }
  .leftSide:before {
    content: "";
    position: absolute;
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: ${white} transparent;
    top: 7px;
    transform: rotate(-90deg);
  }
  .chatHeader {
    margin: 7vh 5vw 0;
    /* position: absolute;
    top: 0; */
    h1 {
      color: ${white};
    }
  }
  .main {
    padding: 0;
    margin: 2vh 5vw 5vh;
    height: 100%;
    border: 2px solid ${darkGreen};
  }
  .container {
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    margin-top: 2vh;
    padding-top: 2vh;

    background-color: ${lightGreen};
    border-radius: 0;
  }
  .chat {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    overflow: scroll;
    height: 60vh;

    padding-bottom: 10px;
    p {
      display: inline-block;
      padding: 7px;
      margin: 3px 12px;
      border-radius: 4px 0 4px 4px;

      background-color: ${white};
      color: ${darkGreen};
    }
    small {
      display: block;
      margin: 0 15px 8px 15px;
      font-size: 0.6rem;
    }
  }
  form {
    display: flex;
    textarea {
      flex: 1;
      height: 50px;
      border: 1px solid ${mediumGreen};
    }
    .sendButton {
      height: 50px;
      padding: 10px 20px;
      text-transform: uppercase;
      border-radius: 0 5px 5px 0;

      color: ${white};
      background-color: ${mediumGreen};
      border: 1px solid ${mediumGreen};
    }
    .sendButton:hover {
      height: 50px;
      padding: 10px 20px;
      text-transform: uppercase;
      border-radius: 0 5px 5px 0;

      color: ${mediumGreen};
      background-color: ${white};
    }
  }
`;

export const ChatList = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;

  a {
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px;

    display: flex;

    img {
      width: 40px;
      border: 1px solid ${mediumGreen};
      margin-right: 10px;
    }
    .message {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        display: block;
        font-size: 1.2rem;
        color: ${darkGreen};
        margin-bottom: 3px;
      }
      .lastMessages {
        display: flex;
        flex-direction: row;
        align-items: space-between;
        flex: 1;
        small {
          font-size: 0.8rem;
          color: ${mediumGreen};
        }
        .time {
          color: ${darkGreen};
          font-size: 0.6rem;
          margin-right: 4px;
        }
      }
    }
  }
  a:hover {
    background-color: ${lightGreen};
  }
`;
