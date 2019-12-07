import React, { Component } from "react";
import axios from "axios";
import ProjectCards from "./ProjectCards";
import ProjectForm from "./ProjectForm";
import ProjectSearch from "./ProjectSearch";

export default class Project extends Component {
  state = {
    projects: [],
    user: this.props.user,
    remote: false,
    status: false,
    role: false
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

  setRemote = () => {
    this.setState({
      remote: !this.state.remote
    });
    console.log(this.state.remote);
  };

  setStatus = () => {
    this.setState({
      status: !this.state.status
    });
    console.log(this.state.status);
  };

  setRole = () => {
    this.setState({
      role: !this.state.role
    });
    console.log(this.state.role);
  };

  render() {
    return (
      <div>
        <h1>Project feed</h1>
        <div>
          <ProjectSearch
            projects={this.state.projects}
            user={this.state.user}
            setRemote={this.setRemote}
            setStatus={this.setStatus}
            setRole={this.setRole}
            remote={this.state.remote}
            status={this.state.status}
            role={this.state.role}
          />
        </div>
        <div>
          <ProjectForm user={this.state.user} />
        </div>
        <div>
          <ProjectCards
            remote={this.state.remote}
            status={this.state.status}
            role={this.state.role}
            projects={this.state.projects}
            user={this.state.user}
          />
        </div>
      </div>
    );
  }
}
