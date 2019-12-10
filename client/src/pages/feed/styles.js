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
  h1 {
    color: ${white};
    margin-bottom: 3vh;
  }
  .userSearch {
    margin: 5vh 0 2vh;
    display: flex;
    height: 30px;
    input {
      flex: 1;
      padding: 5px;
    }
  }
  .userCard {
    display: grid;
    grid-template-columns: 3fr 4fr 1fr;
    margin: 5vh 0;
    padding: 2vh 0;
    border-top: 1px solid ${mediumGray};

    &:hover {
      background-color: ${lightGreen};
    }
    .userHeader {
      display: flex;
      align-items: flex-start;
      margin-right: 2vw;
      .userPhoto {
        img {
          max-width: 80px;
          max-height: auto;
          border: 1px solid ${mediumGreen};
        }
      }
      .userInfos {
        display: flex;
        flex-direction: column;
        margin-left: 2vh;
        h2 {
          color: ${darkGreen};
        }
        h4 {
          color: ${darkGreen};
          font-weight: 100;
          margin: 3px 0;
        }
        p {
          line-height: 1.3rem;
          color: ${mediumGreen};
        }
      }
    }
    .userSkills {
      display: flex;
      flex-direction: column;
      padding-right: 2vw;
      h4 {
        color: ${darkGreen};
        font-size: 0.8rem;
        margin-bottom: 5px;
      }
      .flexRow {
        flex-wrap: wrap;
        p {
          color: ${mediumGreen};
          line-height: 1.5rem;
        }
      }
    }
    .editButton {
      display: inline-block;
      color: ${mediumGreen};
      font-size: 12px;
      text-align: right;
      margin-right: 2vw;
    }
    .editButton:hover {
      color: ${white};
    }
  }

  @media screen and (min-width: 0px) and (max-width: 750px) {
    .userCard {
      display: grid;
      grid-template-columns: 1fr;
    }
    .userSkills {
      padding: 2vh 0;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 450px) {
  }
`;
