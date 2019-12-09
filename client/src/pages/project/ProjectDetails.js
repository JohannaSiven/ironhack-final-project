import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
      console.log(this.state.project);
      console.log(this.props.user);
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

  addContributor = (applicant, project) => {
    axios
      .post(`/api/projects/applications/accept`, {
        applicant,
        project
      })
      .then(response => {
        console.log("RESULT", response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeApplicant = (applicant, project) => {
    axios
      .post(`/api/projects/applications/reject`, {
        applicant,
        project
      })
      .then(response => {
        console.log(response.data);
        console.log(response.data.applications);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateRoles = (project, role) => {
    axios
      .post(`/api/projects/applications/roleUpdate`, {
        project,
        role
      })
      .then(response => {
        console.log(response.data);
        console.log(response.data.applications);
      })
      .catch(err => {
        console.log(err);
      });
  };

  accepted = event => {
    this.addContributor(event.target.id, this.state.project._id);
    this.removeApplicant(event.target.id, this.state.project._id);
    this.updateRoles(this.state.project._id, event.target.name);
  };

  rejected = event => {
    this.removeApplicant(event.target.id, this.state.project._id);
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
    const { project } = this.state;
    if (!project) {
      return <div></div>;
    }

    console.log(project);
    return (
      <div>
        <h3>{project.title}</h3>
        <p>{project.created_at}</p>
        {/* ------------------ REMOTE ------------------ */}
        {project.remote ? (
          <span remote={project.remote.toString()}>Remote</span>
        ) : (
          <span remote={project.remote.toString()}>Local</span>
        )}

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
                    {role.open && this.props.user._id !== project.owner._id && (
                      <button name={role.name} onClick={this.handleApplication}>
                        Apply
                      </button>
                    )}
                    {this.props.user._id === project.owner._id &&
                      project.applications.map(applicant => {
                        return (
                          <div key={applicant.user}>
                            {applicant.role === role.name && (
                              <>
                                <Link to={`/user/${applicant.user}`}>
                                  see profile
                                </Link>
                                <button
                                  type="button"
                                  id={applicant.user}
                                  name={role.name}
                                  onClick={this.accepted}
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  id={applicant.user}
                                  name={role.name}
                                  onClick={this.rejected}
                                >
                                  Reject
                                </button>
                              </>
                            )}
                          </div>
                        );
                      })}
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
