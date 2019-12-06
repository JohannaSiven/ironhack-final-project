import React, { Component } from "react";

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

    /* if(this.props.city !== ""){
      console.log(this.props.city)
    } */

    //Check if it is filtering by city
    if (this.props.city !== "") {
      console.log("propscity", this.props.city);
      users = users.filter(value => {
        if (value.location) {
          return value.location.toLowerCase().includes(this.props.city.toLowerCase());
        }
        console.log("filtervalue", value);
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
      <div>
        {users.map(value => {
          return (
            <div
              key={value._id}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <div>
                <img height="80px" src={value.photo} alt="" />
              </div>
              <div>
                <h3>{value.username}</h3>
                <p>{value.role}</p>
              </div>
              <div>
                <ul>
                  {value.skills.map((skill, index) => {
                    return (
                      <li key={index} style={{ paddingRight: "5px" }}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p>{value.location}</p>
                <a href={`/user/${value._id}`}>Check User</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
