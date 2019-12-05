import React, { Component } from "react";
import { login } from "../../services/user";
import { Form, Alert } from "./styles";

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
        this.props.setUser(data);
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {this.state.error && <Alert>{this.state.error}</Alert>}
          <button type="submit">Log in</button>
        </Form>
        <a href="http://localhost:5555/api/auth/linkedin">
          <img
            src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
            alt="Linkedin Btn"
          />
        </a>
      </div>
    );
  }
}

export default Login;
