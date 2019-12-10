import React, { Component } from "react";

import Login from "./Login";
import Signup from "./Signup";
import logo from "../../img/collabrains-01.svg";

import { AuthContainer } from "./styles";

export default class Auth extends Component {
  state = {
    left: 35,
    showForm: "login"
  };

  toggleEdit = event => {
    this.setState({
      showForm: event.target.name,
      left: event.target.name === "login" ? 35 : 0
    });
  };
  render() {
    return (
      <AuthContainer>
        <div className="border">
          <div
            className="banner"
            props={this.state}
            style={{ left: `${this.state.left}vw` }}
          >
            <img src={logo} alt="COLLABRAINS" />
            {this.state.showForm === "login" ? (
              <div className="signup">
                <h1>WELCOME BACK</h1>
                <h2>TO COLLABRAINS</h2>
                <p>To connect please login with your personal info</p>
                <button
                  type="button"
                  className="editButton"
                  name="signup"
                  onClick={this.toggleEdit}
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className="login">
                <h1>WELCOME</h1>
                <h2>TO COLLABRAINS</h2>
                <p>Enter your personal details and start journey with us</p>
                <button
                  type="button"
                  className="editButton"
                  name="login"
                  onClick={this.toggleEdit}
                >
                  Login
                </button>
              </div>
            )}
          </div>
          <Login
            props={this.props}
            setUser={this.props.setUser}
            state={this.state}
          />
          <Signup props={this.props} setUser={this.props.setUser} />
        </div>
      </AuthContainer>
    );
  }
}
