import React, { Component } from "react";
import axios from "axios";
import ProjectCards from "./ProjectCards";
import ProjectForm from "./ProjectForm";

export default class Project extends Component {
  state = {
    projects: []
  };

  getProjects() {
    axios
      .get("/api/projects")
      .then(response => {
        this.setState({
          projects: response.data
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log("component mounted");
    this.getProjects();
  }

  render() {
    return (
      <div>
        <h1>Project feed</h1>
        <ProjectForm />
        <ProjectCards projects={this.state.projects} />
      </div>
    );
  }
}
