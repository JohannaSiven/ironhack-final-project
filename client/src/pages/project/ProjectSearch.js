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
          name="status"
          id="status"
          checked={this.props.status}
          onChange={this.props.setStatus}
        />

        <label htmlFor="open">open projects only</label>
        <br />
        
        <input
          type="checkbox"
          name="role"
          id="role"
          checked={this.props.role}
          onChange={this.props.setRole}
        />

        <label htmlFor="role">you can try this one but it won't do shit</label>
      </form>
    );
  }
}

export default ProjectSearch;
