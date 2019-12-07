import React, { Component } from "react";
// import axios from "axios";
import { handleUpload } from "../../services/cloudinary";
import { editUserProfile } from "../../services/user";

import UserPhoto from "./components/UserPhoto";
import UserDescription from "./components/UserDescription";
import UserRole from "./components/UserRole";
import UserLocation from "./components/UserLocation";
import UserSkills from "./components/UserSkills";
import UserPortfolio from "./components/UserPortfolio";
import UserTags from "./components/UserTags";
export default class EditProfile extends Component {
  state = {
    role: this.props.profileUser.role,
    location: this.props.profileUser.location,
    skills: this.props.profileUser.skills,
    portfolio: this.props.profileUser.portfolio,
    tags: this.props.profileUser.tags,
    photo: this.props.profileUser.photo,
    description: this.props.profileUser.description,

    showForm: "",
    newSkill: "",
    newPortfolio: "",
    newTag: "",
    uploadOn: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRemove = elem => {
    this.setState(
      {
        skills: this.state.skills.filter(s => s !== elem),
        portfolio: this.state.portfolio.filter(p => p !== elem),
        tags: this.state.tags.filter(t => t !== elem)
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

  handleFileUpload = e => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    this.setState({ uploadOn: true });

    handleUpload(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        this.setState({ photo: response.secure_url, uploadOn: false });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  uploadProfile = () => {
    this.changeState();

    // if (this.state.uploadOn) return;

    const { _id } = this.props.profileUser;

    const userInfos = {
      role: this.state.role,
      location: this.state.location,
      skills: this.state.skills,
      portfolio: this.state.portfolio,
      tags: this.state.tags,
      photo: this.state.photo,
      description: this.state.description
    };

    editUserProfile(_id, userInfos).then(response => {
      this.props.setProfileUser(response);
    });
    this.setState({
      showForm: ""
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
        <form onSubmit={this.handleSubmit}>
          {/* ------------------ PHOTO ------------------ */}
          <UserPhoto
            profile={this.props.profileUser}
            uploadOn={this.state.uploadOn}
            handleFileUpload={this.handleFileUpload}
          />
          <br />

          {/* ------------------ USERNAME ------------------ */}
          <h1>{profile.username}</h1>
          <br />

          {/* ------------------ DESCRIPTION ------------------ */}
          <UserDescription
            onChange={this.handleChange}
            value={this.state.description}
            onClick={this.toggleEdit}
            profile={this.props.profileUser}
            showForm={this.state.showForm}
          />
          <br />

          {/* ------------------ ROLE ------------------ */}
          <UserRole
            onChange={this.handleChange}
            value={this.state.role}
            onClick={this.toggleEdit}
            profile={this.props.profileUser}
            showForm={this.state.showForm}
          />
          <br />

          {/* ------------------ LOCATION ------------------ */}
          <UserLocation
            onChange={this.handleChange}
            value={this.state.location}
            onClick={this.toggleEdit}
            profile={this.props.profileUser}
            showForm={this.state.showForm}
          />
          <br />

          {/* ------------------ SKILLS ------------------ */}
          <UserSkills
            onChange={this.handleChange}
            onClick={this.toggleEdit}
            onSubmit={this.handleSubmit}
            profile={this.props.profileUser}
            value={this.state.newSkill}
            showForm={this.state.showForm}
            handleRemove={this.handleRemove}
          />
          <br />

          {/* ------------------ PORTFOLIO ------------------ */}
          <UserPortfolio
            onChange={this.handleChange}
            onClick={this.toggleEdit}
            onSubmit={this.handleSubmit}
            profile={this.props.profileUser}
            value={this.state.newPortfolio}
            showForm={this.state.showForm}
            handleRemove={this.handleRemove}
          />
          <br />

          {/* ------------------ TAGS ------------------ */}
          <UserTags
            onChange={this.handleChange}
            onClick={this.toggleEdit}
            onSubmit={this.handleSubmit}
            profile={this.props.profileUser}
            value={this.state.newTag}
            showForm={this.state.showForm}
            handleRemove={this.handleRemove}
          />
          <br />
        </form>
      </div>
    );
  }
}
