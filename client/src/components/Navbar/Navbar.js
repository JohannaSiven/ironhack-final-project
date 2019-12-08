import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/user";

import logo from "../../img/collabrains-02.svg";

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
        <Link className="navLogo" to="/">
          <img src={logo} alt="Collabrains" />
        </Link>
        <div className="navPages">
          {this.props.user ? (
            <>
              <Link className="cool-link" to="/">
                Home
              </Link>
              <Link className="cool-link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="cool-link" to={`/user/${this.props.user._id}`}>
                Profile
              </Link>
              <Link className="cool-link" to="/projects">
                Projects
              </Link>
              <Link className="cool-link" to="/users">
                Users
              </Link>

              <Link className="cool-link" to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="cool-link" to="/signup">
                Signup
              </Link>
              <Link className="cool-link" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </Nav>
    );
  }
}
