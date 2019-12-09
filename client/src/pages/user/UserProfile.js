import React, { Component } from "react";
//import { Link } from "react-router-dom";

import { FaMapMarkerAlt } from "react-icons/fa";

import { Container } from "./styles";
import axios from "axios";

export default class UserProfile extends Component {
  getChat = () => {
    const profileUser = this.props.profileUser._id;
    const activeUser = this.props.user;
    console.log('sent users:', profileUser, activeUser);
    axios
      .post("/api/chat", {
        profileUser,
        activeUser
      })
      .then(response => {
        console.log('found users:', response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const profile = this.props.profileUser;

    return (
      <Container>
        <div className="bg-header" />
        <div className="container">
          <div className="userPhoto">
            <img src={profile.photo} alt={profile.username} />
          </div>
          <div>
            <div className="userName">
              <h1>{profile.username}</h1>
              <span>
                <button onClick={this.getChat}>
                  Chat with {profile.username}
                </button>
              </span>
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
