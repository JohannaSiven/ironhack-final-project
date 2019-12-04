import React, { Component } from "react";
import axios from 'axios';

export default class Project extends Component {
  state = {
    projects: []
  }

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

  componentDidMount(){
    console.log('component mounted');
    this.getProjects();
  }
 
  render() {
    return (
      <div>
        <h1>Project</h1>
      </div>
    );
  }
}
