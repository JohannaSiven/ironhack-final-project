import React, { Component } from "react";
import axios from "axios";
import BestProjects from "./BestProjects";
import MyProjects from "./MyProjects"


export default class Dashboard extends Component {
  state = {
    projects: [],
    user: this.props.user
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

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
      <div>
        <h1>{this.props.user.username} Dashboard </h1>
        <div style={{ textAlign: "center" }}>
          <h2>Projects I am working on</h2>
          <MyProjects user={this.props.user} />
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Projects matching Your Profile</h2>
          <BestProjects projects={this.state.projects} user={this.props.user} />
        </div>
      </div>
    );
  }
}
