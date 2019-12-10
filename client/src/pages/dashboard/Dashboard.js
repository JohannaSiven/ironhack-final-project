import React, { Component } from "react";
import axios from "axios";
import BestProjects from "./BestProjects";
import ProjectForm from "../project/ProjectForm";
import MyOpenProjects from "./MyOpenProjects";
import styled from "styled-components";
import MyOngoingProjects from "./MyOngoingProjects";

const Container = styled.div`
  h1 {
    color: white;
    padding-bottom: 10vh;
  }
  .topics {
    display: flex;
    justify-content: space-around;
    background-color: #17252a;
    color: white;
    padding: 1vh;
  }
  button {
    color: white;
    font-size: 3vh;
    background-color: #17252a;
    border: 0
  }
`;

export default class Dashboard extends Component {
  state = {
    projects: [],
    user: this.props.user,
    showProjects: "myOpenProjects"
  };

  getProjects() {
    axios
      .get("/api/projects")
      .then(response => {
        // filter to get only projects with similar roles available
        let responseFilter = response.data.filter(value => {
          const roles = value.requiredRoles.map(requiredRoles => {
            if (requiredRoles.open) {
              return requiredRoles.name;
            }
            return false;
          });
          if (roles.indexOf(this.props.user.role) >= 0) {
            return value;
          }
          return false;
        });

        this.setState({
          projects: responseFilter
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showProjects = event => {
    console.log(event)
    this.setState({
      showProjects: event.target.name
    })
  };

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
      <Container>
        <div className="main">
          <div className="bg-header" />
          <h1>{this.props.user.username} Dashboard </h1>
          <div className="topics">
            <button name="myOpenProjects" onClick={this.showProjects}>
              Projects Ideas
            </button>
            <button name="myOngoingProjects" onClick={this.showProjects}>
              Ongoing Projects
            </button>
          </div>
          {this.state.showProjects === "myOpenProjects" ? (
            <div
              style={{ textAlign: "center"}}
            >
              <MyOpenProjects user={this.props.user} />
            </div>
          ) : (
            <div
              style={{ textAlign: "center"}}
            >
              <MyOngoingProjects user={this.props.user} />
            </div>
          )}

          <div style={{ textAlign: "center" }}>
            <h2>Projects matching Your Profile</h2>
            <BestProjects
              projects={this.state.projects}
              user={this.props.user}
            />
          </div>

          <div>
            <ProjectForm user={this.state.user} />
          </div>
        </div>
      </Container>
    );
  }
}
