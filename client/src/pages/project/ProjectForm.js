import React, { Component } from "react";
import axios from "axios";
import RoleSelect from "./RoleSelect";

class ProjectForm extends Component {
  state = {
    title: "",
    description: "",
    requiredRoles: [],
    tags: [],
    remote: true
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckBox = event => {
    console.log(event.target.name, event.target.checked);
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  onSelect = event => {
    this.setState({
      requiredRoles: event
    });
  };

  onRemove = event => {
    this.setState({
      requiredRoles: event
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/projects", {
        status: "Open",
        owner: this.props.user,
        contributors: [this.props.user],
        title: this.state.title,
        description: this.state.description,
        requiredRoles: this.state.requiredRoles,
        tags: this.state.tags,
        remote: this.state.remote
      })
      .then(response => {
        this.setState({
          title: "",
          description: "",
          requiredRoles: [],
          tags: [],
          remote: true
        });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Project title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="tags">Attach keywords that apply </label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={this.state.tags}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="remote">
          People can join the project group remotely from any location
        </label>
        <input
          type="checkbox"
          name="remote"
          id="remote"
          checked={this.state.remote}
          onChange={this.handleCheckBox}
        />
        <br />
        <label htmlFor="requiredRoles">Choose which roles are required: </label>
        <RoleSelect onSelect={this.onSelect} onRemove={this.onRemove} />

        <button type="submit">Submit new project</button>
      </form>
    );
  }
}

export default ProjectForm;
