import React, { Component } from "react";
import axios from "axios";
import BestProjects from "./BestProjects"


class OnGoingProjects extends Component {

  render(){

    /* const {user, projecst} = this.props

    const myProjects = projects.filter(value =>{
      if (value.)
    }) */

    return(
      <div>Projects I am working on</div>
    )
  }
}


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
            return false
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
        <div>
          <OnGoingProjects
            projects={this.state.projects}
            user={this.props.user}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          Projects matching Your Profile
          <BestProjects projects={this.state.projects} user={this.props.user} />
        </div>
      </div>
    );
  }
}
