import React, { Component } from "react";
import axios from "axios";
import RoleSelect from "./RoleSelect";
import { FaTrashAlt } from "react-icons/fa";

import { Form } from "./styles";
import { tags } from "../user/Keywords";

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

  handleSelect = event => {
    this.setState({
      tags: [...this.state.tags, event.target.value],
      newTag: ""
    });
  };

  handleCheckBox = event => {
    console.log(event.target.name, event.target.checked);
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  handleRemove = elem => {
    this.setState({
      tags: this.state.tags.filter(t => t !== elem)
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
    console.log(this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>CREATE NEW PROJECT</h2>
        <label htmlFor="title" className="label">
          PROJECT TITLE
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="description" className="label">
          Description
        </label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="tags" className="label">
          keywords
        </label>
        <ul>
          {this.state.tags &&
            this.state.tags.map((tag, i) => {
              return (
                <li key={i}>
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={() => this.handleRemove(tag)}
                  >
                    <FaTrashAlt color="red" /> {tag}
                  </button>
                </li>
              );
            })}
        </ul>
        <select name="tags" id="tags" onChange={this.handleSelect}>
          {tags.map(tag => {
            return (
              <option value={tag} key={tag}>
                {tag}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="remote" className="label">
          REMOTE
        </label>
        <input
          type="checkbox"
          name="remote"
          id="remote"
          checked={this.state.remote}
          onChange={this.handleCheckBox}
        />
        <br />
        <label htmlFor="requiredRoles" className="label">
          REQUIRED ROLES{" "}
        </label>
        <RoleSelect
          className="select"
          onSelect={this.onSelect}
          onRemove={this.onRemove}
        />

        <button type="submit" className="editButton createButton">
          Submit new project
        </button>
      </Form>
    );
  }
}

export default ProjectForm;
