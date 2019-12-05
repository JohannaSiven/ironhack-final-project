import React, { Component } from "react";

class ProjectSearch extends Component {
  state = {
    user: this.props.user,
    projects: [],
    projectStatus: false,
    myRoleAvailable: false,
    acceptsRemote: false
  };

  // NOT FINISHED

  handleCheckbox = event => {
    console.log(event.target.name, event.target.checked);
    this.setState(
      {
        [event.target.name]: event.target.checked
      },
      () => {
        console.log("my role!!!!!!", this.state.user.role);

        // list of projects with open positions left
        let openProjects = this.props.projects.filter(project =>
          project.status.includes("Open")
        );
        console.log("status: open", openProjects);

        // list of projects with user's role left
        let myRoleAvailable = this.props.projects.filter(value => {
          const roles = value.requiredRoles.map(requiredRoles => {
            if (requiredRoles.open) {
              return requiredRoles.name;
            }
            return false;
          });
          if (roles.indexOf(this.props.user.role) >= 0) {
            return value;
          }
          return false;
        });
        console.log("my role available: true", myRoleAvailable);

        // list of projects where remote option = true
        let remoteOption = this.props.projects.filter(
          project => project.remote === true
        );
        console.log("remote: true", remoteOption);
      }
    );
  };

  render() {
    return (
      <>
        <form>
          {/* checkbox 'only open projects' */}
          <label htmlFor="projectStatus">
            Only projects with open positions
          </label>
          <input
            type="checkbox"
            id="projectStatus"
            name="projectStatus"
            checked={this.state.projectStatus}
            onChange={this.handleCheckbox}
          />

          {/* checkbox 'my role available' */}
          <label htmlFor="myRoleAvailable">
            Only projects looking for {this.state.user.role}
          </label>
          <input
            type="checkbox"
            id="myRoleAvailable"
            name="myRoleAvailable"
            checked={this.state.myRoleAvailable}
            onChange={this.handleCheckbox}
          />

          {/* checkbox 'remote option' */}
          <label htmlFor="acceptsRemote">Only projects accepting remote</label>
          <input
            type="checkbox"
            id="acceptsRemote"
            name="acceptsRemote"
            checked={this.state.acceptsRemote}
            onChange={this.handleCheckbox}
          />

          {/* search city, person, title, keyword */}
          <label htmlFor=""></label>
          <input type="text" />
        </form>

        <br />
        <br />
      </>
    );
  }
}

export default ProjectSearch;
