import React, { Component } from "react";
import axios from "axios";

import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";

export default class Profile extends Component {
  state = {
    profileUser: "",
    error: "",
    owenerProfile: false
  };

  getUser = () => {
    const { userId } = this.props.match.params;

    axios
      .get(`/api/profiles/${userId}`)
      .then(response => {
        this.setState({
          profileUser: response.data,
          owenerProfile: userId === this.props.user._id
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

  setProfileUser = newUser => {
    this.setState({
      profileUser: newUser
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    }
    if (!this.state.profileUser) {
      return <div></div>;
    }
    if (this.state.owenerProfile) {
      return (
        <EditProfile
          profileUser={this.state.profileUser}
          props={this.props}
          setProfileUser={this.setProfileUser}
        />
      );
    } else {
      return <UserProfile profileUser={this.state.profileUser} />;
    }
  }
}
