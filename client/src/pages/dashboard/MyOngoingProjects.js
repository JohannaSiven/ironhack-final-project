import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "./styles";
var Carousel = require("react-responsive-carousel").Carousel;
var ReactDOM = require("react-dom");

export default class MyOpenProjects extends Component {
  state = {
    myProjects: [],
    projectInd: 0
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
    console.log("my proj", this.state.myProjects);
    return (
      <Container>
        <div className="projects">
          {this.state.myProjects.map((value,index) => {
            if (value.status !== "Open" && this.state.projectInd === index) {
              return (
                <div key={value._id}>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                    <Link to={`/projects/${value._id}`}>Check Project</Link>
                  </div>
                  {value.requiredRoles && (
                    <div>
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

                  <div>
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
                  <div>
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

                  {value.owner === this.props.user._id && (
                    <p style={{ color: "red" }}>I am the Owner</p>
                  )}
                </div>
              );
            }
          })}
        </div>
      </Container>
    );
  }
}
