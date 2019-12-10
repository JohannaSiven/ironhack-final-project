import React, { Component } from "react";
import { Container } from "./styles";

import img1 from "../../img/user-01.png";
import img2 from "../../img/user-02.png";
import img3 from "../../img/user-03.png";
import img4 from "../../img/user-04.png";
import img5 from "../../img/user-05.png";
import img6 from "../../img/user-06.png";
import img7 from "../../img/user-07.png";
import img8 from "../../img/user-08.png";
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
            <div className="height100" />
            <div className="textDiv">
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore provident esse laudantium soluta unde tenetur nisi
                autem, consectetur dicta temporibus cum repellendus quia
                doloremque dolore! Nihil labore tempora nostrum minima!
              </p>
            </div>
            <div className="height200" />
            <div className="textDiv">
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore provident esse laudantium soluta unde tenetur nisi
                autem, consectetur dicta temporibus cum repellendus quia
                doloremque dolore! Nihil labore tempora nostrum minima!
              </p>
            </div>
            <div className="height200" />
            <div className="textDiv">
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore provident esse laudantium soluta unde tenetur nisi
                autem, consectetur dicta temporibus cum repellendus quia
                doloremque dolore! Nihil labore tempora nostrum minima!
              </p>
            </div>
            <div className="height200" />
            <div className="textDiv">
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore provident esse laudantium soluta unde tenetur nisi
                autem, consectetur dicta temporibus cum repellendus quia
                doloremque dolore! Nihil labore tempora nostrum minima!
              </p>
            </div>
            <div className="height200" />
            <div className="textDiv">
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore provident esse laudantium soluta unde tenetur nisi
                autem, consectetur dicta temporibus cum repellendus quia
                doloremque dolore! Nihil labore tempora nostrum minima!
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
                top: this.state.heightAverage / 2,
                marginLeft: "15vw",
                zIndex: 2
              }}
            />
            <div className="height200" />
            <img
              src={img4}
              alt="img 1"
              style={{
                position: "sticky",
                top: this.state.heightAverage / 2 - 30,
                marginLeft: "7vw",
                zIndex: 1
              }}
            />
            <div className="height200" />
            <img
              src={img3}
              alt="img 1"
              style={{
                position: "sticky",
                top: this.state.heightAverage / 2 - 30,
                marginLeft: "19vw",
                zIndex: 3
              }}
            />
            <div className="height200" />

            <img
              src={img2}
              alt="img 1"
              className="img4"
              style={{
                position: "sticky",
                top: this.state.heightAverage / 2 - 30,
                zIndex: 0
              }}
            />
            <div className="height500" />
          </div>
        </div>
        <footer>
          <h4>footer</h4>
        </footer>
      </Container>
    );
  }
}
