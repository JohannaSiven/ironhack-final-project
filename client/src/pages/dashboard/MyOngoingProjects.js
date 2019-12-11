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
            <div className="projectDetails" key={value._id}>
              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
              {value.requiredRoles && (
                <div className="singleInfo1">
                  <p>
                    <strong>Open Positions</strong>
                  </p>
                  {value.requiredRoles.map(singleRole => {
                    if (singleRole.open) {
                      return <p>{singleRole.name}</p>;
                    }
                    return false;
                  })}
                  <p>
                    <strong>Filled Positions</strong>
                  </p>
                  {value.requiredRoles.map(singleRole => {
                    if (!singleRole.open) {
                      return <p>{singleRole.name}</p>;
                    }
                    return false;
                  })}
                </div>
              )}
              <div className="singleInfo1">
                {value.applications && (
                  <p>
                    <strong>
                      You have new applications for the following roles:
                    </strong>
                    {value.applications.map(applicant => {
                      return <p>{applicant.role}</p>;
                    })}
                  </p>
                )}
              </div>
              <div className="singleInfo">
                <div>
                  <p>
                    <strong>Status</strong>
                  </p>
                  <p>{value.status}</p>
                </div>
                <div>
                  <p>
                    <strong>Posted Date</strong>
                  </p>
                  <p>{value.created_at.slice(0, 10)}</p>
                </div>
              </div>
              <div className="singleInfo1">
                <h3>Tags</h3>
                {value.tags.map((value, index) => {
                  return <p key={index}>{value}</p>;
                })}
              </div>
              {value.owner === this.props.user._id && (
                <p style={{ color: "red" }}>I am the Owner</p>
              )}
            </div>
            <Link className="btn-see-project" to={`/projects/${value._id}`}>
              Check Project
            </Link>
          </div>
        );
      });
    console.log("my proj", this.state.myProjects);
    return (
      <Container>
        <div className="projects1">
          <AwesomeSlider>{projectsJsx}</AwesomeSlider>
        </div>
      </Container>
    );
  }
}
