import { createGlobalStyle } from "styled-components";
// import Montserrat from "https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap";

const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
const green = "#3AAFA9";
//const lightGreen = "#DEF2F1";
const white = "#FFF";

// const darkGray = "#0B0C10";
// const mediumGray = "#1F2833";
//const otherGreen = "#45A29E";
// const lighterGreen = "#66FCF1";
// const gray = "#C5C6C7";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body, input, textarea {
    color: #333;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${white};
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  li {
    list-style: none
  }

  textarea {
    color: ${mediumGreen};
    width: 100%;
    height: 100px;
  }
  input {
    color: ${mediumGreen};
  }
  select {
    width: 50%;
    color: ${mediumGreen};
    font-size: 14px;
    border: 1px solid ${green};
    border-radius: 4px;
  }
  .inline {
    display: inline-block;
  }
  .flexRow {
    display: flex;
  }
  .flexColumn {
    display: flex;
    flex-direction: column;
  }
  .flex1 {
    flex: 1;
  }
  .main {
    padding: 2vh 5vw 5vh;
    height: 100%;
  }
  .container {
    margin: 5vh 5vw;
    border-radius: 7px;
  }
  .bg-header {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${darkGreen};
    width: 100%;
    height: 22vh;
    z-index: -1;
    border-bottom: 4px solid ${mediumGreen};
  }
  .cool-link::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${mediumGreen};
    transition: width .3s;
  }
  .cool-link:hover::after {
    width: 100%;
    transition: width .3s;
  }

  .editButton {
    padding: 3px 5px;
    color: ${green};
    font-size: 12px;
    border: 1px solid ${green};
    background-color: ${white};
    border-radius: 4px;
  }
  .editButton:hover {
    border: 1px solid ${mediumGreen};
    background-color: ${mediumGreen};
    color: ${white}
  }

  .deleteButton {
    margin: 0;
    padding: 3px 5px;
    color: ${green};
    font-size: 12px;
    border: 1px solid ${green};
    border-radius: 4px;
  }
  .deleteButton:hover {
    border: 1px solid ${mediumGreen};
    background-color: ${mediumGreen};
    color: ${white}
  }
  
  .saveButton {
    margin: 0;
    padding: 3px 5px;
    color: ${mediumGreen};
    font-size: 12px;
    border: 1px solid ${green};
    border-radius: 4px;
  }
  .saveButton:hover {
    border: 1px solid ${mediumGreen};
    background-color: ${mediumGreen};
    color: ${white}
  }
  .notificationButton {
    background-color: ${darkGreen};
    border: none;
    font-size: 14px;
    margin: 0 10px;
  }
`;
