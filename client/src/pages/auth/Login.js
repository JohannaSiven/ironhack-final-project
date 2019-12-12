import React, { Component } from "react";
import { login } from "../../services/user";
import { Alert } from "./styles";
import { FaLinkedin } from "react-icons/fa";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    login(this.state.username, this.state.password).then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        });
      } else {
        this.props.props.setUser(data);
        this.props.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <div className="authContainer login">
        <form onSubmit={this.handleSubmit}>
          <h2>LOGIN</h2>
          <div>
            <label htmlFor="username" className="inp">
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="&nbsp;"
              />
              <span className="label">USERNAME</span>
              <span className="border"></span>
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp">
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="&nbsp;"
              />
              <span className="label">PASSWORD</span>
              <span className="border"></span>
            </label>
          </div>
          {this.state.error && <Alert>{this.state.error}</Alert>}
          <button type="submit">LOG IN</button>
          <div className="linkedin">
            <span>or log in with</span>
            <a href={`${process.env.CALLBACK_URL}/api/auth/linkedin`}>
              <FaLinkedin />
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
