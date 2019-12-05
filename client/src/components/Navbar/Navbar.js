import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/user";

import { Nav } from "./styles";

export default class Navbar extends Component {
  handleLogout = () => {
    // destroys the session on the server
    logout();
    // updates the `user` state in App
    this.props.clearUser(null);
  };

  render() {
    //console.log(this.props.user);
    return (
      <Nav active>
        {this.props.user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to={`/user/${this.props.user._id}`}>Profile</Link>
            <Link to="/projects">Projects</Link>

            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </Nav>
    );
  }
}
