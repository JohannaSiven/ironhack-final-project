import React, { Component } from "react";

class ProjectSearch extends Component {
  render() {
    return (
      <form>
        <input
          type="checkbox"
          name="remote"
          id="remote"
          checked={this.props.remote}
          onChange={this.props.setRemote}
        />

        <label htmlFor="remote">remote work accepted</label>
        <br />

        <input
          type="checkbox"
          name="role"
          id="role"
          checked={this.props.role}
          onChange={this.props.setRole}
        />

        <label htmlFor="role">Only projects with my role available</label>
      </form>
    );
  }
}

export default ProjectSearch;
