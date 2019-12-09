import { createGlobalStyle } from "styled-components";
const mediumGreen = "#2B7A78";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    background-color: "white";
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none
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
`;
