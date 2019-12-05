import React, { Component } from "react";
import axios from "axios";

export default class EditProfile extends Component {
  state = {
    role: this.props.profileUser.role,
    location: this.props.profileUser.location,
    skills: this.props.profileUser.skills,
    portfolio: this.props.profileUser.portfolio,
    tags: this.props.profileUser.tags,

    showForm: "",
    newSkill: "",
    newPortfolio: "",
    newTag: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRemove = skill => {
    this.setState(
      {
        skills: this.state.skills.filter(s => s !== skill),
        portfolio: this.state.portfolio.filter(p => p !== skill),
        tags: this.state.tags.filter(t => t !== skill)
      },
      () => this.uploadProfile()
    );
  };

  changeState = () => {
    if (this.state.newSkill) {
      this.setState(
        {
          skills: [...this.state.skills, this.state.newSkill],
          newSkill: ""
        },
        () => this.uploadProfile()
      );
    }
    if (this.state.newPortfolio) {
      this.setState(
        {
          portfolio: [...this.state.portfolio, this.state.newPortfolio],
          newPortfolio: ""
        },
        () => this.uploadProfile()
      );
    }

    if (this.state.newTag) {
      this.setState(
        {
          tags: [...this.state.tags, this.state.newTag],
          newTag: ""
        },
        () => this.uploadProfile()
      );
    }
  };

  uploadProfile = () => {
    this.changeState();

    const { _id } = this.props.profileUser;

    const { role, location, skills, portfolio, tags } = this.state;

    axios
      .put(`/api/profiles/${_id}`, {
        role,
        location,
        skills,
        portfolio,
        tags
      })
      .then(response => {
        this.setState({
          showForm: ""
        });
        this.props.setProfileUser(response.data);
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: err.response.data.message
          });
        }
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.uploadProfile();
  };

  toggleEdit = event => {
    event.preventDefault();
    this.setState({
      showForm: event.target.name
    });
  };

  render() {
    const profile = this.props.profileUser;
    return (
      <div>
        <h1>{profile.username}</h1>
        <form onSubmit={this.handleSubmit}>
          {/* ------------------ ROLE ------------------ */}
          {this.state.showForm === "role" ? (
            <>
              <input
                type="text"
                name="role"
                value={this.state.role}
                onChange={this.handleChange}
              />
              <button type="submit" onSubmit={this.handleSubmit}>
                Save
              </button>
            </>
          ) : profile.role ? (
            <>
              <span>{profile.role}</span>
              <button name="role" onClick={this.toggleEdit}>
                edit
              </button>
            </>
          ) : (
            <>
              <button name="role" onClick={this.toggleEdit}>
                Add Role
              </button>
            </>
          )}
          {/* ------------------ LOCATION ------------------ */}
          {this.state.showForm === "location" ? (
            <>
              <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
              <button type="submit" onSubmit={this.handleSubmit}>
                Save
              </button>
            </>
          ) : profile.location ? (
            <>
              <span>{profile.location}</span>
              <button name="location" onClick={this.toggleEdit}>
                edit
              </button>
            </>
          ) : (
            <>
              <button name="location" onClick={this.toggleEdit}>
                Add location
              </button>
            </>
          )}
          {/* ------------------ SKILLS ------------------ */}
          {this.state.showForm === "newSkill" ? (
            <>
              <ul>
                {profile.skills.map((skill, i) => {
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => this.handleRemove(skill)}
                      >
                        {skill} X
                      </button>
                    </li>
                  );
                })}
              </ul>
              <input
                type="text"
                name="newSkill"
                value={this.state.newSkill}
                onChange={this.handleChange}
              />
              <button type="submit" onSubmit={this.handleSubmit}>
                Save
              </button>
            </>
          ) : profile.skills ? (
            <>
              <ul>
                {profile.skills.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
                })}
              </ul>
              <button name="newSkill" onClick={this.toggleEdit}>
                edit
              </button>
            </>
          ) : (
            <>
              <button name="newSkill" onClick={this.toggleEdit}>
                Add Skills
              </button>
            </>
          )}
          {/* ------------------ PORTFOLIO ------------------ */}
          {this.state.showForm === "newPortfolio" ? (
            <>
              <ul>
                {profile.portfolio.map((pf, i) => {
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => this.handleRemove(pf)}
                      >
                        {pf} X
                      </button>
                    </li>
                  );
                })}
              </ul>
              <input
                type="text"
                name="newPortfolio"
                value={this.state.newPortfolio}
                onChange={this.handleChange}
              />
              <button type="submit" onSubmit={this.handleSubmit}>
                Save
              </button>
            </>
          ) : profile.portfolio ? (
            <>
              <ul>
                {profile.portfolio.map((pf, i) => {
                  return <li key={i}>{pf}</li>;
                })}
              </ul>
              <button name="newPortfolio" onClick={this.toggleEdit}>
                edit
              </button>
            </>
          ) : (
            <>
              <button name="newPortfolio" onClick={this.toggleEdit}>
                Add Portfolio
              </button>
            </>
          )}
          {/* ------------------ TAGS ------------------ */}
          {this.state.showForm === "newTag" ? (
            <>
              <ul>
                {profile.tags.map((tag, i) => {
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => this.handleRemove(tag)}
                      >
                        {tag} X
                      </button>
                    </li>
                  );
                })}
              </ul>
              <input
                type="text"
                name="newTag"
                value={this.state.newTag}
                onChange={this.handleChange}
              />
              <button type="submit" onSubmit={this.handleSubmit}>
                Save
              </button>
            </>
          ) : profile.tags ? (
            <>
              <ul>
                {profile.tags.map((tag, i) => {
                  return <li key={i}>{tag}</li>;
                })}
              </ul>
              <button name="newTag" onClick={this.toggleEdit}>
                edit
              </button>
            </>
          ) : (
            <>
              <button name="newTag" onClick={this.toggleEdit}>
                Add Portfolio
              </button>
            </>
          )}
        </form>
      </div>
    );
  }
}
