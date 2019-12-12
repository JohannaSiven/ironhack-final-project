import styled from "styled-components";

const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
// const green = "#3AAFA9";
// const lightGreen = "#DEF2F1";
const white = "#FFF";

// const darkGray = "#0B0C10";
// const mediumGray = "#1F2833";
// const otherGreen = "#45A29E";
// const lighterGreen = "#66FCF1";
// const gray = "#C5C6C7";

export const Container = styled.div`
  .projects {
    display: flex;
  }

  .projects1 {
    display: flex;
    width: 100vw;
    /* margin-bottom: 7vh; */
  }

  .projectInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 1vh;
    color: ${darkGreen};
  }

  .projectDetails1 {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr;
    padding: 5vh;
  }
  .projectDetails {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr 2fr;
    padding: 0 6rem;
  }

  .arrows {
    display: flex;
    justify-content: space-between;
  }

  .test {
    /* height: 50vh; */
    margin: 3vh;
  }

  .singleInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 3vh;
    text-align: left;
  }

  .singleInfo1 {
    display: flex;
    flex-direction: column;
    line-height: 3vh;
  }
  .awssld__bullets {
    display: none;
  }

  .awssld__box {
    height: auto;
  }
  .sc-dnqmqq {
    height: auto;
  }
  .awssld__next,
  .awssld__prev {
    height: 0;
  }
  .awssld__container {
    height: auto;
    margin: 2vh;
    padding-bottom: 50vh;
  }
  .awssld__content {
    background-color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #17252a;

    height: auto;
    padding: 3vh 0;

    /* .awssld {
      height: 100%;
    } */

    .btn-see-project {
      background-color: #17252a;
      color: white;
      padding: 0.6rem;
      border-radius: 3px;
      width: 8rem;
      margin-top: 15px;
    }
  }

  .blockMatch {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 35vh;
  }
  .grid422 {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr;
    padding: 0 8vw;
    height: 100%;
  }
  .grid31 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0 8vw;
    height: 100%;
  }
  .grid311 {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    padding: 0 8vw;
    height: 100%;
  }
  .innerGrid {
    padding-right: 1.5vw;
    margin-right: 1.5vw;
    text-align: left;
    border-right: 1px solid ${darkGreen};
  }
  /* .verticalLine {
  } */
  .title {
    margin: 0;
  }
  p {
    margin-top: 5px;
    line-height: 1.3rem;
    color: ${mediumGreen};
  }
  h3 {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${darkGreen};
  }
  .btn-see-project:hover {
    background-color: ${white};
    color: ${mediumGreen};
    border: 1px solid ${mediumGreen};
  }
  @media screen and (min-width: 0px) and (max-width: 650px) {
    .grid422 {
      grid-template-columns: 1fr 1fr;
    }
  }

  h4 {
    padding-bottom: 2rem;
  }
`;
