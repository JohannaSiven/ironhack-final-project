import styled from "styled-components";

const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
//const green = "#3AAFA9";
const lightGreen = "#DEF2F1";
const white = "#FFF";

// const darkGray = "#0B0C10";
const mediumGray = "#1F2833";
//const otherGreen = "#45A29E";
// const lighterGreen = "#66FCF1";
// const gray = "#C5C6C7";

export const Container = styled.div`
  .feedHeader {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5vh;
    form {
      display: flex;
      flex-wrap: wrap;
      input {
        margin-left: 2vw;
        width: 15px;
        height: 15px;
        margin-bottom: 7px;
      }
      label {
        color: ${white};
        font-size: 14px;
        margin-left: 3px;
      }
    }
    h1 {
      color: ${white};
      margin-bottom: 3vh;
    }
  }
  .feedCards {
    .cardLink:hover {
      background-color: ${lightGreen};
    }
    .gridCard {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-top: 3vh;
      justify-content: space-between;
      border-top: 2px solid ${darkGreen};
      h2 {
        color: ${darkGreen};
      }
      h4 {
        color: ${darkGreen};
        font-size: 0.8rem;
        margin-bottom: 5px;
      }
      p {
        line-height: 1.3rem;
        color: ${mediumGreen};
      }
    }
    .cardBottom {
      display: flex;
      flex-direction: column;
      margin-bottom: 5vh;
      color: ${mediumGreen};
      .date {
        font-size: 10px;
        align-self: flex-end;
      }
      .seeMore {
        font-size: 14px;
        align-self: flex-end;
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 800px) {
    .feedHeader {
      display: block;
      form {
        display: block;
        label {
          color: ${darkGreen};
        }
        input {
          margin-left: 0;
        }
      }
    }
    .feedCards {
      .gridCard {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 5vh 0 5vh 0;
        div {
          margin-bottom: 30px;
        }
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 450px) {
    .feedCards {
      .gridCard {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export const ProjectContainer = styled.div`
  .projectHeader {
    color: ${white};
    margin-bottom: 4vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2rem;
    }
  }
  .date {
    font-size: 12px;
    align-self: flex-end;
    margin: 0;
  }
  .projectInfos {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2vh;
    span {
      font-size: 0.9rem;
      border-bottom: 2px solid ${darkGreen};
    }
  }
  .projectMain {
    .projectDescription {
      margin-right: 2vh;
    }
    p,
    li {
      line-height: 1.4rem;
      display: inline-block;
      color: ${mediumGreen};
    }
    p:last-child,
    ul:last-child {
      margin-bottom: 4vh;
    }
    h4 {
      font-size: 0.7rem;
      color: ${darkGreen};
      margin-bottom: 1vh;
    }
  }
  .userIcon {
    display: flex;
    align-items: center;
    color: ${mediumGreen};
    &:hover {
      color: ${darkGreen};
    }
    img {
      max-height: 30px;
      margin-right: 5px;
      border: 1px solid ${mediumGreen};
    }
  }
  .verticalLine {
    border-left: 2px solid ${darkGreen};
    padding-left: 2vw;
  }
  .grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-bottom: 5vh;
  }
  .grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .grid3 {
    display: grid;
    grid-template-columns: 5fr 1fr;
  }
  .roles {
    p {
      margin-bottom: 5px;
    }
    .editButton {
      margin-right: 7px;
    }
  }
  .projectForm {
    form {
      padding-top: 3vh;
      input {
        padding: 5px;
        margin-left: 1vw;
        margin: 2vh 0 2vh 5px;
      }
      textarea {
        padding: 5px;
        margin: 2vh 0 2vh 5px;
      }
      label {
        color: ${darkGreen};
        font-size: 14px;
        margin: 2vh 0 2vh 5px;
        text-transform: uppercase;
      }
      select {
        width: 100px;
        margin: 10px 10px 0;
      }
      .deleteButton {
        margin-top: 1vh;
      }
      .editButton {
        text-transform: uppercase;
        margin-top: 3vh;
        margin-right: 2vw;
        padding: 10px 25px;
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 750px) {
    .grid {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
    .grid2 {
      display: flex;
      flex-direction: column;
    }
    .grid3 {
      display: grid;
      grid-template-columns: 3fr 1fr;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    .contributors {
      padding-top: 4vh;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
    }
    .owner {
      padding: 0;
      border: 0;
    }
    .status {
      padding: 0;
      border: 0;
    }
    .grid2 {
      display: flex;
      flex-direction: column;
    }
    .grid3 {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Form = styled.form`
  background-color: ${white};
  border-radius: 10px;
  padding: 2vh 2vw;
  margin: 5vh 0;
  h2 {
    font-weight: 100;
    color: ${darkGreen};
    font-size: 1.2rem;
    margin-bottom: 1vh;
  }
  .label {
    font-size: 0.9rem;
    margin-right: 10px;
    color: ${mediumGreen};
    text-transform: uppercase;
  }
  input {
    margin: 1vh 0;
    padding: 5px;
    width: 30vw;
    color: ${mediumGray};
    border: none;
    border-bottom: 1px solid ${mediumGreen};
  }
  select {
    padding: 5px;
    margin: 1vh 0;
  }
  #remote {
    padding: 5px;
    margin: 1vh 0 2vh;
    width: 15px;
    height: 15px;
  }
  textarea {
    padding: 10px;
    margin: 1vh 0;
    color: ${mediumGray};
    border: 1px solid ${mediumGreen};
  }
  .createButton {
    margin-top: 2vh;
    padding: 10px 25px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;
