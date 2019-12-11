import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/user";
import NotificationBox from "./Notifications";

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
      <Nav active color={this.color}>
        <Link className="navLogo" to="/">
          <img src={logo} alt="Collabrains" />
        </Link>
        <div className="navPages">
          {this.props.user ? (
            <>
              <Link className="cool-link" to="/dashboard">
                Dashboard
              </Link>

              <Link
                className="cool-link"
                to={`/user/${this.props.user._id}`}
                user={this.props.user}
              >
                Profile
              </Link>

              <Link className="cool-link" to="/projects">
                Projects
              </Link>

              <Link className="cool-link" to="/users">
                Users
              </Link>

              <Link
                className="cool-link"
                to={{
                  pathname: "/inbox",
                  state: {
                    activeUser: this.props.user,
                    fromProfile: false
                  }
                }}
              >
                Inbox
              </Link>

              <Link>
                <NotificationBox
                  className="cool-link notification"
                  user={this.props.user}
                />
              </Link>

              <Link className="cool-link" to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                className="cool-link"
                to={{
                  pathname: "/auth",
                  state: {
                    showForm: "signup"
                  }
                }}
              >
                Signup
              </Link>

              <Link
                className="cool-link"
                to={{
                  pathname: "/auth",
                  state: {
                    showForm: "login"
                  }
                }}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </Nav>
    );
  }
}
