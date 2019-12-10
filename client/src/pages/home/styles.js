import styled from "styled-components";
const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
//const green = "#3AAFA9";
//const lightGreen = "#DEF2F1";
const white = "#FFF";

// const darkGray = "#0B0C10";
// const mediumGray = "#1F2833";
const otherGreen = "#45A29E";
// const lighterGreen = "#66FCF1";
// const gray = "#C5C6C7";

export const Container = styled.div`
  /* height: 350vh; */
  .homeGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: ${darkGreen};
  }
  .height500 {
    height: 100vh;
  }
  .height200 {
    height: 25vh;
  }
  .height100 {
    height: 17vh;
  }
  img {
    max-width: 25vw;
  }
  .img4 {
    max-width: 20vw;
  }
  .textContainer {
    width: 50vw;
  }
  .textDiv {
    padding: 13vh 1vw 13vh 6vw;
    color: ${white};
    h1 {
      margin-bottom: 1vh;
    }
  }
  footer {
    border-top: 3px solid ${mediumGreen};
    background-color: ${otherGreen};
    height: 15vh;
    width: 100%;
  }
  @media screen and (min-width: 0px) and (max-width: 800px) {
    .height500 {
      height: 100vh;
    }
    .height200 {
      height: 15vh;
    }
    .height100 {
      height: 9vh;
    }
    .textDiv {
      padding: 8vh 1vw 1vh 6vw;
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
        line-height: 1.2rem;
        font-weight: 100;
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 550px) {
    .height500 {
      height: 50vh;
    }
    .height200 {
      height: 10vh;
    }
    .height100 {
      height: 4vh;
    }
    .textDiv {
      padding: 7vh 1vw 1vh 2vw;
      h1 {
        font-size: 1rem;
      }
      p {
        display: none;
      }
    }
  }
`;
