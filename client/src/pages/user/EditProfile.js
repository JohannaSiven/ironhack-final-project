import React, { Component } from "react";
// import axios from "axios";
import { handleUpload } from "../../services/cloudinary";
import { editUserProfile } from "../../services/user";

import { FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "./styles";

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
    newTag: "",
    uploadOn: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePortfolioChange = newPort => {
    this.setState({
      portfolio: newPort
    });
  };

  handleRemove = elem => {
    this.setState(
      {
        skills: this.state.skills.filter(s => s !== elem),
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
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    this.setState({ uploadOn: true });

    handleUpload(uploadData)
      .then(response => {
        this.setState({ photo: response.secure_url, uploadOn: false });
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  uploadProfile = () => {
    this.changeState();
    if (this.state.uploadOn) return;

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
  };

  handleSubmit = event => {
    if (event) event.preventDefault();
    this.uploadProfile();
  };

  toggleEdit = event => {
    event.preventDefault();
    this.setState({
      showForm: event.target.name
    });
  };

  hideForm = () => {
    setTimeout(() => {
      this.setState({
        showForm: ""
      });
    }, 200);
  };

  render() {
    const profile = this.props.profileUser;
    return (
      <Container>
        <div className="bg-header" />
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            {/* ------------------ PHOTO ------------------ */}
            <div className="userPhoto">
              <UserPhoto
                profile={this.props.profileUser}
                uploadOn={this.state.uploadOn}
                handleFileUpload={this.handleFileUpload}
              />
            </div>

            {/* ------------------ USERNAME ------------------ */}
            <div className="userMain">
              <div className="userName">
                <h1>{profile.username}</h1>
                {/* ------------------ LOCATION ------------------ */}
                <div>
                  <FaMapMarkerAlt size="14px" color="#45A29E" />
                  <UserLocation
                    onChange={this.handleChange}
                    value={this.state.location}
                    onClick={this.toggleEdit}
                    profile={this.props.profileUser}
                    showForm={this.state.showForm}
                    hideForm={this.hideForm}
                  />
                </div>
              </div>

              <div className="userInfos">
                {/* ------------------ ROLE ------------------ */}
                <UserRole
                  onChange={this.handleChange}
                  value={this.state.role}
                  onClick={this.toggleEdit}
                  profile={this.props.profileUser}
                  showForm={this.state.showForm}
                  hideForm={this.hideForm}
                />

                {/* ------------------ PORTFOLIO ------------------ */}
                <UserPortfolio
                  onChange={this.handlePortfolioChange}
                  onClick={this.toggleEdit}
                  profile={this.props.profileUser}
                  showForm={this.state.showForm}
                  hideForm={this.hideForm}
                />

                <div className="description">
                  <h4>Description</h4>
                  {/* ------------------ DESCRIPTION ------------------ */}
                  <UserDescription
                    onChange={this.handleChange}
                    value={this.state.description}
                    onClick={this.toggleEdit}
                    profile={this.props.profileUser}
                    showForm={this.state.showForm}
                    hideForm={this.hideForm}
                  />
                </div>

                <div className="lists">
                  <div className="skills">
                    <h4>Skills</h4>

                    {/* ------------------ SKILLS ------------------ */}
                    <UserSkills
                      onChange={this.handleChange}
                      onClick={this.toggleEdit}
                      onSubmit={this.handleSubmit}
                      profile={this.props.profileUser}
                      value={this.state.newSkill}
                      showForm={this.state.showForm}
                      handleRemove={this.handleRemove}
                      hideForm={this.hideForm}
                    />
                  </div>
                  <div className="tags">
                    <h4>Tags</h4>
                    {/* ------------------ TAGS ------------------ */}
                    <UserTags
                      onChange={this.handleChange}
                      onClick={this.toggleEdit}
                      onSubmit={this.handleSubmit}
                      profile={this.props.profileUser}
                      value={this.state.newTag}
                      showForm={this.state.showForm}
                      handleRemove={this.handleRemove}
                      hideForm={this.hideForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    );
  }
}
