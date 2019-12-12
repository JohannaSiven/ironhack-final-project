import styled from "styled-components";
const darkGreen = "#17252A";
const mediumGreen = "#2B7A78";
const green = "#3AAFA9";
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
    height: 95vh;
  }
  .height250 {
    height: 32vh;
  }
  .height200 {
    height: 25vh;
  }
  .height100 {
    height: 17vh;
  }
  img {
    max-height: 300px;
  }
  .textContainer {
    width: 50vw;
  }
  .textDiv {
    padding: 13vh 4vw 13vh 7vw;
    color: ${white};
    height: 280px;
    h1 {
      text-transform: uppercase;
      font-size: 3rem;
      font-weight: 100;

      display: inline-block;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 2px solid ${green};
    }
    h2 {
      font-weight: 100;
      font-size: 1.3rem;
    }
    h3 {
      font-weight: 100;
      font-size: 2.4rem;

      display: inline-block;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 2px solid ${green};
    }
    p {
      line-height: 1.7rem;
    }
  }
  footer {
    border-top: 3px solid ${mediumGreen};
    background-color: ${otherGreen};
    /* height: 10vh; */
    width: 100%;
    color: ${white};
    display: flex;
    align-items: center;
    padding: 3vh 7vw 3vh 7vw;
    .linkedin {
      margin-left: 7px;
      display: flex;
      align-items: center;
      a {
        margin-left: 7px;
      }
    }
    .github {
      margin-left: 7px;
      a {
        margin-left: 7px;
        color: ${white};
      }
    }
    a {
      color: ${white};
    }
  }
  @media screen and (min-width: 0px) and (max-width: 800px) {
    .height500 {
      height: 80vh;
    }
    .height250 {
      height: 20vh;
    }
    .height200 {
      height: 15vh;
    }
    .height100 {
      height: 9vh;
    }
    img {
      max-height: 200px;
    }
    .textDiv {
      max-height: 200px;
      padding: 0 1vw 1vh 6vw;
      h1 {
        padding-top: 5vh;
        font-size: 2rem;
      }
      h2 {
        font-weight: 100;
        font-size: 1.3rem;
      }
      h3 {
        font-weight: 100;
        font-size: 1.8rem;

        display: inline-block;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 2px solid ${green};
      }
      p {
        font-size: 0.9rem;
        line-height: 1.2rem;
        font-weight: 100;
      }
    }
    footer {
      flex-wrap: wrap;
      .linkedin {
        flex-wrap: wrap;
      }
      .github {
        flex-wrap: wrap;
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 550px) {
    .height500 {
      height: 85vh;
    }
    .height200 {
      height: 17vh;
    }
    .height250 {
      height: 17vh;
    }
    .height100 {
      height: 4vh;
    }
    img {
      max-height: 120px;
    }
    .textDiv {
      padding: 0 1vw 1vh 3vw;
      height: 120px;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        padding-top: 3vh;
      }
      h2 {
        font-size: 1rem;
        line-height: 1.2rem;
      }
      h3 {
        font-size: 1.7rem;
        padding-top: 3vh;
      }
      p {
        display: none;
      }
    }
  }
`;
