import styled from "styled-components";

const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
const green = "#3AAFA9";
const lightGreen = "#DEF2F1";
const white = "#FFF";

// const darkGray = "#0B0C10";
const mediumGray = "#1F2833";
const otherGreen = "#45A29E";
// const lighterGreen = "#66FCF1";
// const gray = "#C5C6C7";

export const Container = styled.div`
  /* padding: 2vh 5vw 5vh;
  height: 100%; */

  input {
    /* background-color: red; */
    /* background-color: ${white}; */
    /* border: none; */
    border-bottom: 1px solid ${mediumGreen};

    /* width: fit-content !important; */
    /* width: fit-content;
    /* -ms-box-sizing: content-box;
    /* -moz-box-sizing: content-box;
    /* -webkit-box-sizing: content-box; */
    /* box-sizing: content-box !important; */
  }

  .container {
    display: flex;

    .userPhoto img {
      max-width: 250px;
      max-height: 250px;
      border-radius: 7px 0 0 0;
      border: 1px solid ${mediumGreen};
    }
    .newPhoto {
      position: relative;
      bottom: 32px;
      left: 5px;
      display: flex;
      align-items: center;
      label {
        margin-right: 4px;
        cursor: pointer;
      }
    }
    .userMain {
      flex: 1;
    }

    .userName {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      align-items: baseline;
      align-content: center;
      justify-content: space-between;
      margin: 10vh 4vw 0 4vw;
      border-bottom: 1px solid ${mediumGray};

      h1 {
        color: ${darkGreen};
        font-size: 2.5rem;
      }
      h3 {
        color: ${otherGreen};
        margin: 0 0 1.5vh 2px;
      }
      div {
        display: flex;
        align-items: baseline;
      }
    }
    .userInfos {
      flex: 1;
      padding: 3vh 4vw 7vh 4vw;
      background-color: ${white};
      h2 {
        color: ${mediumGreen};
      }
      a {
        display: inline-block;
        margin: 2vw 2vw 2vw 0;
        padding: 1vh 2vw;
        color: ${green};
        background-color: ${white};
        border: 1px solid ${green};
        border-radius: 4px;
        text-decoration: none;
      }
      a:hover {
        border: 1px solid ${mediumGreen};
        background-color: ${lightGreen};
        color: ${mediumGreen}
      }
      .description {
        border-top: 1px solid ${mediumGray};
        border-bottom: 1px solid ${mediumGray};
        padding: 3vh 0;
        p {
          line-height: 1.3rem;
          color: ${mediumGreen};
        }
      }
      h4 {
        margin-bottom: 5px;
        color: ${mediumGray};
      }
    }
    .lists {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 20px 0;

      li {
        line-height: 1.5rem;
        color: ${mediumGreen};
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 800px) {
    .container {
      .userPhoto {
        img {
        max-width: 200px;
        max-height: 200px;
        }
      }
      .userName {
        h1 {
          width: 100%;
        }
      }
      .userInfos {
        position: absolute;
        display: block;
        top: 45vh;
        left: 3vw;
        right: 3vw;
        margin: 0 7vw;
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 550px) {
    .container {
      .userName {
        h1 {
          width: 100%;
          font-size: 2rem;
        }
      }
      .userPhoto {
        max-width: 250px;
        height: 300px;
        img {
        width: 100%;
        height: auto;
        }
      }
    }
  }
`;
