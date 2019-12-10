import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { projectInfos, addApplication } from "../../services/project";

export default class ProjectDetails extends Component {
  state = {
    project: "",
    editForm: false,
    showProjectDetails: true,
    title: "",
    description: "",
    requiredRoles: [],
    tags: [],
    remote: true,
    status: "Open",
    error: ""
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
        /* this.props.history.push(`/projects/${this.state.project._id}`); */
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
        console.log("history", this.props.history);
        console.log("history id", this.state.project._id);
        this.getInitialData(this.props.match.params.projectId);
      })
      .catch(err => {
        console.log(err);
      });
  };

  accepted = event => {
      let result = window.confirm(
      "Are you sure you want to accept this applicant?"
    );
    if (result) {
    this.addContributor(event.target.id, this.state.project._id);
    this.removeApplicant(event.target.id, this.state.project._id);
    this.updateRoles(this.state.project._id, event.target.name);

     }
  };

  rejected = event => {
    let result = window.confirm(
      "Are you sure you want to remove this applicant?"
    );
    if (result) {
    this.removeApplicant(event.target.id, this.state.project._id);
    this.getInitialData(this.props.match.params.projectId);
    }
  };

  getInitialData = projectId => {
    projectInfos(projectId)
      .then(response => {
        this.setState({
          project: response,
          title: response.title,
          description: response.description,
          requiredRoles: response.requiredRoles,
          tags: response.tags,
          remote: response.remote,
          status: response.status
        });
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 404) {
          this.setState({
            error: err.response.data.message
          });
        }
      });
  };

  componentDidMount() {
    const { projectId } = this.props.match.params;
    this.getInitialData(projectId);
  }

  /* ----------------------------- Editing options ---------------------------- */

  showEditForm = () => {
    this.setState({
      editForm: !this.state.editForm,
      showProjectDetails: !this.state.showProjectDetails
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`/api/projects/${this.props.match.params.projectId}`, {
        title: this.state.title,
        description: this.state.description,
        // requiredRoles: this.state.requiredRoles,
        tags: this.state.tags,
        remote: this.state.remote,
        status: this.state.status
      })
      .then(response => {
        console.log("RESPONSAA", response);
        this.setState({
          project: response.data,
          editForm: false,
          showProjectDetails: true
        });
        /* this.props.history.push(
          `/projects/${this.props.match.params.projectId}`
        ); */
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleCheckBox = event => {
    console.log(event.target.name, event.target.checked);
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  /* ------------------------------------ delete ----------------------------------- */

  deleteProject = () => {
    let result = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (result) {
      axios
        .delete(`/api/projects/${this.props.match.params.projectId}`)
        .then(response => {
          console.log("delete response", response);
          this.props.history.push("/projects");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    console.log(this.props);
    if (!this.state.project) {
      return <div></div>;
    }
    const { project } = this.state;
    return (
      <div>
        {/* check if user is project owner */}
        {this.props.user._id === project.owner._id && (
          <p>
            <button onClick={this.showEditForm}>Edit Project</button>
          </p>
        )}

        {/* Show edit Form */}
        {this.state.editForm && (
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
              People can join the project group remotely
            </label>
            <input
              type="checkbox"
              name="remote"
              id="remote"
              checked={this.state.remote}
              onChange={this.handleCheckBox}
            />
            <br />
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={this.handleChange}
              value={this.state.status}
              id="status"
            >
              <option value="Open">Open</option>
              <option value="In progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            {/* <label htmlFor="requiredRoles">
              Choose which roles are required:{" "}
            </label> */}
            {/* <RoleSelect onSelect={this.onSelect} onRemove={this.onRemove} /> */}

            <button type="submit">Save Changes</button>
            <button onClick={this.deleteProject}>Delete Project</button>
          </form>
        )}

        {/* -------------- Project details -------------- */}

        {this.state.showProjectDetails && (
          <div>
            <h3>{project.title}</h3>
            <p>{project.created_at.slice(0, 10)}</p>

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
                    <Link key={c} to={`/user/${c._id}`}>
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
                        {role.open &&
                          this.props.user._id !== project.owner._id && (
                            <button
                              name={role.name}
                              onClick={this.handleApplication}
                            >
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
        )}
      </div>
    );
  }
}
