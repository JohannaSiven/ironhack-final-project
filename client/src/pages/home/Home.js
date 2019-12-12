import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import { FaLinkedin, FaGithubAlt, FaRegCopyright } from "react-icons/fa";

import img2 from "../../img/user-02.png";
import img3 from "../../img/user-03.png";
import img4 from "../../img/user-04.png";
import img5 from "../../img/user-05.png";
export default class Home extends Component {
  state = {
    width: 0,
    height: 0,
    widthAverage: 0,
    heightAverage: 0
  };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  };

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      widthAverage: window.innerWidth / 2,
      heightAverage: window.innerHeight / 2
    });
  };
  handleScroll = event => {
    // console.log(event.srcElement.defaultView.frames.pageYOffset);
    // console.log(event.srcElement.defaultView.frames.scrollY);

    this.setState({
      scrollTop: event.srcElement.defaultView.frames.scrollY
    });
  };

  render() {
    return (
      <Container>
        <div className="homeGrid">
          <div className="textContainer">
            <div className="height200" />
            <div className="textDiv">
              <h1>Collabrains</h1>
              <h2>The innovative way of making your ideas come to life</h2>
            </div>
            <div className="height200" />
            <div className="textDiv">
              <h3>Make ideas come to life</h3>
              <p>
                You have an idea but not all the skills to make it happen?
                On Collabrains you have the possibility to publish your ideas as
                projects, and let other people with different backgrounds help
                you turn this project into reality.
              </p>
            </div>
            <div className="height250" />
            <div className="textDiv">
              <h3>Apply for projects</h3>
              <p>
                Search and apply for specific projects or simply find the best
                opportunities for yourself on your personalized dashboard.
              </p>
            </div>
            <div className="height200" />
            <div className="textDiv">
              <h3>Decide who's the best fit </h3>
              <p>
                As the project owner, you can go through all applications to
                your project, check the profile of each applicant, have a
                private chat with them, and decide if the person is a good match
                for your project role.
              </p>
            </div>
            <div className="height200" />
            <div className="textDiv">
              <h3>Discover the power of Teamwork</h3>
              <p>
                Once you decide it is time to start the project, change the
                status to “On progress” and start to work with your new team.
              </p>
            </div>
            {/* <div className="height100" /> */}
          </div>
          <div className="homeContainer">
            <div className="height200" />
            <img
              src={img5}
              alt="img 5"
              style={{
                position: "sticky",
                top: this.state.heightAverage / 2 - 20,
                marginLeft: "15vw",
                zIndex: 1
              }}
            />
            <div className="height200" />
            <img
              src={img4}
              alt="img 1"
              style={{
                position: "sticky",
                top: this.state.heightAverage / 2 - 30,
                marginLeft: "10vw",
                zIndex: 2
              }}
            />
            <div className="height200" />
            <img
              src={img3}
              alt="img 1"
              style={{
                position: "sticky",
                top: this.state.heightAverage / 2 - 40,
                marginLeft: "19vw",
                zIndex: 3
              }}
            />
            <div className="height200" />

            <img
              src={img2}
              alt="img 1"
              style={{
                position: "sticky",
                top: this.state.heightAverage / 2 - 70,
                marginLeft: "2vw",
                zIndex: 0
              }}
            />
            <div className="height500" />
          </div>
        </div>
        <footer>
          <span>
            <FaRegCopyright marginLeft="5px" /> 2019 |
          </span>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/johanna-siven-32b95759/"
              target="_blank"
            >
              <FaLinkedin /> Johanna Siven
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-araujo-filho/"
              target="_blank"
            >
              <FaLinkedin /> Fernando Araujo
            </a>
            <a href="https://www.linkedin.com/in/jeff-moraes" target="_blank">
              <FaLinkedin /> Jeff Moraes
            </a>
          </div>
          <div className="github">
            <span>| Full code in our </span>

            <a
              href="https://github.com/JohannaSiven/ironhack-final-project"
              target="_blank"
            >
              <FaGithubAlt /> Github Repository
            </a>
          </div>
        </footer>
      </Container>
    );
  }
}
