import React, { Component } from "react";
import axios from "axios";
import ProjectCards from "./ProjectCards";
import ProjectForm from "./ProjectForm";
import ProjectSearch from "./ProjectSearch";

export default class Project extends Component {
  state = {
    projects: [],
    user: this.props.user
  };

  getProjects() {
    axios
      .get("/api/projects")
      .then(response => {
        this.setState({
          projects: response.data
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
        <h1>Project feed</h1>
        <div>
          <ProjectSearch
            user={this.state.user}
            projects={this.state.projects}
          />
        </div>
        <div>
          <ProjectForm user={this.state.user} />
        </div>
        <div>
          <ProjectCards projects={this.state.projects} />
        </div>
      </div>
    );
  }
}
