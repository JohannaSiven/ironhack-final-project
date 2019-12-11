import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default class MyOpenProjects extends Component {
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
      .filter(value => value.status === "Open")
      .map(value => {
        return (
          <div className="blockMatch">
            <div className="grid422" key={value._id}>
              <div className="innerGrid">
                <h2 className="title">{value.title}</h2>
                <p>{value.description}</p>
                <br />
                <div className="singleInfo1">
                  <h3>Tags</h3>
                  <div className="flexRow" style={{ flexWrap: "wrap" }}>
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
              <div className="innerGrid">
                <h3>Open Positions</h3>
                {value.requiredRoles &&
                  value.requiredRoles.map(singleRole => {
                    return singleRole.open ? <p>{singleRole.name}</p> : false;
                  })}
              </div>
              <div>
                <h3>New applications</h3>
                {value.applications &&
                  value.applications.map(applicant => {
                    return <p>{applicant.role}</p>;
                  })}
                <br />
                <h3>Filled Positions</h3>
                {value.requiredRoles &&
                  value.requiredRoles.map(singleRole => {
                    if (!singleRole.open) {
                      return <p>{singleRole.name}</p>;
                    }
                    return false;
                  })}
              </div>
              <div className="innerGrid">
                <br />

                <div>
                  <h3>Status</h3>
                  <p>{value.status}</p>
                </div>
              </div>
              <div className="innerGrid">
                <br />
                <div>
                  <h3>Posted Date</h3>
                  <p>{value.created_at.slice(0, 10)}</p>
                </div>
              </div>
              {/* {value.owner === this.props.user._id && (
                <p style={{ color: "red" }}>I am the Owner</p>
              )} */}
              <div>
                <br />
                <Link className="btn-see-project" to={`/projects/${value._id}`}>
                  Check Project
                </Link>
              </div>
            </div>
          </div>
        );
      });
    return (
      <Container>
        <div className="projects1">
          <AwesomeSlider>{projectsJsx}</AwesomeSlider>
        </div>
      </Container>
    );
  }
}
