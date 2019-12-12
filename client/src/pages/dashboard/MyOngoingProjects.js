import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default class MyOngoingProjects extends Component {
  state = {
    myProjects: []
  };

  getProjects() {
    axios
      .get("/api/projects")
      .then(response => {
        console.log(response.data);
        let myProjects = response.data.filter(value => {
          if (
            value.owner === this.props.user._id ||
            value.contributors.includes(this.props.user._id)
          ) {
            return value;
          }
          return false;
        });
        this.setState({
          myProjects: myProjects
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    let projectsJsx = this.state.myProjects
      .filter(value => value.status !== "Open")
      .map(value => {
        return (
          <div className="blockMatch">
            <div className="grid31" key={value._id}>
              <div className="innerGrid">
                <h2 className="title">{value.title}</h2>
                <p>{value.description}</p>
                <br />
                <div className="singleInfo1">
                  <h3>Tags</h3>
                  <div style={{ flexWrap: "wrap" }}>
                    {value.tags.map((value, index) => {
                      return (
                        <p
                          key={index}
                          style={{
                            paddingRight: "5px"
                          }}
                        >
                          | {value}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="singleInfo">
                <h3>Status</h3>
                <p>{value.status}</p>
                <br />
                <h3>Posted Date</h3>
                <p>{value.created_at.slice(0, 10)}</p>
                <Link className="btn-see-project" to={`/projects/${value._id}`}>
                  Check Project
                </Link>
              </div>
            </div>
          </div>
        );
      });
    console.log("my proj", this.state.myProjects);
    return (
      <Container>
        <div className="projects1">
          {projectsJsx.length > 0 ? (
            <AwesomeSlider>{projectsJsx}</AwesomeSlider>
          ) : (
            <AwesomeSlider>
              <div>
                YOU DON'T HAVE ANY ONGOING PROJECT
              </div>
            </AwesomeSlider>
          )}
        </div>
      </Container>
    );
  }
}
