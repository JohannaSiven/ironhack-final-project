import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Container } from "./styles";
import axios from "axios";

export default class UserProfile extends Component {
  state = {
    activeUser: this.props.user,
    profileUser: this.props.profileUser._id,
    chatId: ""
  };

  /*---------------------------------------*/
  // onclick event "contact user" --> find or create new chat

  getChat = () => {
    const activeUser = this.state.activeUser;
    const profileUser = this.state.profileUser._id;
    axios
      .post("/api/chat", {
        activeUser,
        profileUser
      })
      .then(response => {
        this.setState({
          chatId: response.data._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*---------------------------------------*/
  // render component

  render() {
    // click on "contact user" --> change in this.state.chatId --> redirect to chat
    if (this.state.chatId) {
      return <Redirect to={`/inbox/${this.state.chatId}`} />;
    }

    const profile = this.props.profileUser;
    return (
      <Container className="main">
        <div className="bg-header" />
        <div className="container">
          <div className="userPhoto">
            <img src={profile.photo} alt={profile.username} />
          </div>
          <div className="flex1">
            <div className="userName">
              <h1>{profile.username}</h1>
              <button onClick={this.getChat}>Contact</button>`
              <h3>
                <FaMapMarkerAlt size="14px" />
                {profile.location}
              </h3>
            </div>
            <div className="userInfos">
              <h2>{profile.role}</h2>
              {profile.portfolio.map(userPort => {
                return (
                  userPort.url && (
                    <a
                      key={userPort.site}
                      href={`https://www.${userPort.baseUrl}${userPort.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {userPort.site}
                    </a>
                  )
                );
              })}
              <div className="description">
                <h4>Description</h4>
                <p>{profile.description}</p>
              </div>
              <div className="lists">
                <div className="skills">
                  <h4>Skills</h4>

                  {profile.skills && (
                    <ul>
                      {profile.skills.map((skill, i) => {
                        return <li key={i}>{skill}</li>;
                      })}
                    </ul>
                  )}
                </div>
                <div className="tags">
                  <h4>Tags</h4>
                  {profile.tags && (
                    <ul>
                      {profile.tags.map((tag, i) => {
                        return <li key={i}>{tag}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
