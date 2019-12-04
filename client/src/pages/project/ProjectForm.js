import React, { Component } from "react";
import axios from "axios";

class ProjectForm extends Component {
  state = {
    title: "",
    description: "",
    requiredRoles: [],
    tags: [],
    remote: true
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
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

  handleSubmit = event => {
    event.preventDefault();
    // MISSING CURRENT USER! --> submit not working

    axios
      .post("/api/projects", {
        status: "Open",
        // owner: this.req.user,
        contributors: [],
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

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        {/* <label htmlFor="requiredRoles">Choose which roles are required </label>
        <select
          type="text"
          name="requiredRoles"
          id="requiredRoles"
          value={this.state.requiredRoles}
          onSelect={this.handleSelect}
        >
          <option value="Frontend Developer" />
          <option value="Backend Developer" />
          <option value="Fullstack Developer" />
          <option value="UX/UI Designer" />
          <option value="Data analyst" />
          <option value="Quality tester" />
          <option value="Project manager" />
          <option value="Other" />
        </select> */}

        <label htmlFor="tags">Attach keywords that apply </label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={this.state.tags}
          onChange={this.handleChange}
        />

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
        <button type="submit">Submit new project</button>
      </form>
    );
  }
}

export default ProjectForm;
