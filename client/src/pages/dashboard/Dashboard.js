import React, { Component } from "react";
import axios from "axios";
import BestProjects from "./BestProjects";
import ProjectForm from "../project/ProjectForm";
import MyOpenProjects from "./MyOpenProjects";
import styled from "styled-components";
import MyOngoingProjects from "./MyOngoingProjects";
import "react-awesome-slider/dist/styles.css";

const StyledButton = styled.button`
  font-size: 3vh;
  width: 50%;
  background-color: ${props => (props.focus ? "white" : "#17252a")};
  color: ${props => (props.focus ? "#17252a" : "white")};
  padding: 1vh;
  border-radius: 15px 15px 0 0;
  border: 1px solid white;
`;

const Container = styled.div`
  .main {
    background-color: #17252a;
  }

  h1 {
    color: white;
    padding: 6vh;
    text-align: center;
  }
  h2 {
    margin: 6vh 0 3vh;
  }
  .topics {
    display: flex;
    justify-content: space-around;
    background-color: #17252a;
    color: white;
  }

  .btn-projects {
    font-size: 3vh;
    width: 50%;
    background-color: #17252a;
    color: white;
    padding: 1vh;
    border-radius: 1vh;
    border: 1px solid white;
  }

  .btn-projects:focus {
    background-color: white;
    color: #17252a;
    border: 1px solid white;
  }

  .projectsMatch {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    height: auto;
  }
`;

export default class Dashboard extends Component {
  state = {
    projects: [],
    user: this.props.user,
    showProjects: "myOpenProjects",
    focus: true
  };

  getProjects() {
    axios
      .get("/api/projects")
      .then(response => {
        console.log("response axios", response.data);
        // filter to get only projects with similar roles available
        let responseFilter = response.data.filter(value => {
          if (value.requiredRoles) {
            const roles = value.requiredRoles.map(requiredRoles => {
              if (requiredRoles.open === true) {
                return requiredRoles.name;
              }
              return false;
            });
            if (roles.indexOf(this.props.user.role) >= 0) {
              return value;
            }
            return false;
          }
          return false;
        });
        console.log("filteeered", responseFilter);

        this.setState({
          projects: responseFilter
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showProjects = event => {
    console.log(event);
    this.setState({
      showProjects: event.target.name,
      focus: !this.state.focus
    });
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
          <div className="dashboard-main">
            <div className="topics">
              <StyledButton
                focus={this.state.focus}
                name="myOpenProjects"
                onClick={this.showProjects}
              >
                Projects Ideas
              </StyledButton>
              <StyledButton
                focus={!this.state.focus}
                name="myOngoingProjects"
                onClick={this.showProjects}
              >
                Ongoing Projects
              </StyledButton>
            </div>
            {this.state.showProjects === "myOpenProjects" ? (
              <div className="projectsMatch">
                <MyOpenProjects user={this.props.user} />
              </div>
            ) : (
              <div className="projectsMatch">
                <MyOngoingProjects user={this.props.user} />
              </div>
            )}
            <div className="projectsMatch">
              <h2>Projects matching Your Profile</h2>
              <div style={{ textAlign: "center" }}>
                <BestProjects
                  projects={this.state.projects}
                  user={this.props.user}
                />
              </div>
            </div>
            <div>
              <ProjectForm user={this.state.user} />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
