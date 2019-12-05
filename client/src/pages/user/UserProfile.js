import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    const profile = this.props.profileUser;

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
