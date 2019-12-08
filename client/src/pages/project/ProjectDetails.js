import React, { Component } from "react";
import { Link } from "react-router-dom";

import { projectInfos, addApplication } from "../../services/project";

export default class ProjectDetails extends Component {
  state = {
    project: ""
  };

  handleApplication = event => {
    addApplication(this.state.project._id, {
      user: this.props.user._id,
      role: event.target.name
    }).then(response => {
      this.setState({
        project: response
      });
    });
    // this.state.project.applications
  };

  applied = () => {
    if (this.state.project.applications.length > 0) {
      const findRole = this.state.project.applications.find(
        application => application.user === this.props.user._id
      );
      if (findRole) {
        return findRole.role;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  componentDidMount() {
    const { projectId } = this.props.match.params;
    projectInfos(projectId)
      .then(response => this.setState({ project: response }))
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: err.response.data.message
          });
        }
      });
  }

  render() {
    if (!this.state.project) {
      return <div></div>;
    }
    const { project } = this.state;
    return (
      <div>
        <h3>{project.title}</h3>
        <p>{project.created_at}</p>
        {/* ------------------ REMOTE ------------------ */}
        {project.remote ? <span>Remote</span> : <span>Local</span>}

        {/* ------------------ STATUS ------------------ */}
        <h4>Status: </h4>
        <p>{project.status}</p>

        {/* ------------------ ABOUT ------------------ */}
        <h4>About: </h4>
        <p>{project.description}</p>

        {/* ------------------ OWNER ------------------ */}
        <>
          <h4>Owner: </h4>

          <Link to={`/user/${project.owner._id}`}>
            <img
              src={project.owner.photo}
              alt={project.owner.username}
              style={{ maxHeight: "30px" }}
            />
            <span>{project.owner.username}</span>
          </Link>
        </>

        {/* ------------------ CONTRIBUTORS ------------------ */}
        {project.contributors && (
          <>
            <h4>Contributors: </h4>
            {project.contributors.map(c => {
              return (
                <Link key={c._id} to={`/user/${c._id}`}>
                  <img
                    src={c.photo}
                    alt={c.username}
                    style={{ maxHeight: "30px" }}
                  />
                  <span>{c.username}</span>
                </Link>
              );
            })}
          </>
        )}
        {/* ------------------ ROLES ------------------ */}
        {project.requiredRoles && (
          <>
            <h4>Roles required: </h4>
            {this.applied() ? (
              <span>Applied for {this.applied()}</span>
            ) : (
              project.requiredRoles.map((role, i) => {
                return (
                  <div key={i}>
                    <span open={role.open}>{role.name}</span>
                    {role.open && !this.applied() && (
                      <button name={role.name} onClick={this.handleApplication}>
                        Apply
                      </button>
                    )}
                    <br />
                  </div>
                );
              })
            )}
          </>
        )}
        {/* ------------------ TAGS ------------------ */}
        {project.tags && (
          <>
            <h4>Keywords: </h4>
            {project.tags.map((tag, i) => {
              return <p key={i}>{tag}</p>;
            })}
          </>
        )}
      </div>
    );
  }
}
