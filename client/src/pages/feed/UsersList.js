import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UsersList extends Component {
  render() {
    let users;
    // check if there is any search input
    if (this.props.query === "") {
      users = this.props.users;
    } else {
      users = this.props.users.filter(value => {
        return value.username
          .toLowerCase()
          .includes(this.props.query.toLowerCase());
      });
    }

    //Check if it is filtering by city
    if (this.props.city !== "") {
      console.log("propscity", this.props.city);
      users = users.filter(value => {
        if (value.location) {
          return value.location
            .toLowerCase()
            .includes(this.props.city.toLowerCase());
        } else {
          return false;
        }
      });
    }

    // Check if roles are selected
    if (this.props.roles.length !== 0) {
      let roles = this.props.roles.map(value => value.name);
      users = users.filter(user => {
        if (roles.includes(user.role)) {
          return user;
        }
        return false;
      });
    }

    return (
      <>
        {users.map(value => {
          return (
            <Link
              to={`/user/${value._id}`}
              key={value._id}
              className="userCard"
            >
              <div className="userHeader">
                <div className="userPhoto">
                  <img src={value.photo} alt={value.username} />
                </div>
                <div className="userInfos">
                  <h2>{value.username}</h2>
                  <h4>{value.role}</h4>
                  <p>{value.location}</p>
                </div>
              </div>
              <div className="userSkills">
                <h4>SKILLS</h4>
                <div className="flexRow">
                  {value.skills.map((skill, index) => {
                    return (
                      <p key={index} style={{ paddingRight: "5px" }}>
                        | {skill}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="editButton">SEE PROFILE</p>
              </div>
            </Link>
          );
        })}
      </>
    );
  }
}
