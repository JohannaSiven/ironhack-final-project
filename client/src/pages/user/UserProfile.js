import React, { Component } from "react";
import axios from "axios";

export default class UserProfile extends Component {
  state = {
    profileUser: "",
    error: "",
    showForm: false

    // location: profileUser.location,
    // skills: profileUser.skills,
    // portfolio: profileUser.portfolio,
    // tags: profileUser.tags
  };

  getUser = () => {
    const { userId } = this.props.match.params;

    axios
      .get(`/api/profiles/${userId}`)
      .then(response => {
        this.setState({
          profileUser: response.data
        });
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: err.response.data.message
          });
        }
      });
  };

  componentDidMount() {
    this.getUser();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { userId } = this.props.match.params;

    const { location, skills, portfolio, tags } = this.state;

    axios
      .put(`/api/profiles/${userId}`, {
        location,
        skills,
        portfolio,
        tags
      })
      .then(response => {
        this.props.history.push(`/user/${userId}`);
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            error: err.response.data.message
          });
        }
      });
  };

  toggleEdit = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    }
    if (!this.state.profileUser) {
      return <div></div>;
    }
    console.log(this.props);
    const profile = this.state.profileUser;
    return (
      <div>
        <h1>{profile.username}</h1>
        <p>{profile.role}</p>
        <p>{profile.location}</p>
        {profile.skills && (
          <ul>
            {profile.skills.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </ul>
        )}
        {profile.portfolio && (
          <ul>
            {profile.portfolio.map((project, i) => {
              return <li key={i}>{project}</li>;
            })}
          </ul>
        )}
        {profile.tags && (
          <ul>
            {profile.tags.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
