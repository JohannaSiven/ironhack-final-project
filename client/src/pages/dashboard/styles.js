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
  .projects {
    display: flex;
  }

  .projects1 {
    display: flex;
    width: 100vw;
    margin: 2rem 0;
    height: 70vh;
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
    height: 50vh;
    margin: 3vh;
  }

  .singleInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 3vh;
  }

  .singleInfo1 {
    display: flex;
    flex-direction: column;
    line-height: 3vh;
  }

  .blockMatch {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .awssld__content {
    background-color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #17252a;

    .awssld {
      height: 100%;
    }

    .btn-see-project {
      background-color: #17252a;
      color: white;
      padding: 0.6rem;
      border-radius: 3px;
      width: 8rem;
    }
  }
`;
