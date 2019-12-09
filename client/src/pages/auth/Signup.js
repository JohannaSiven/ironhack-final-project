import React, { Component } from "react";
import { signup } from "../../services/user";
import { Form, Alert } from "./styles";
import { roles } from "../user/Keywords";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    role: "Other"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('MY ROLE:', this.state.role)
    signup(this.state.username, this.state.password, this.state.role).then(
      data => {
        if (data.message) {
          this.setState({
            error: data.message
          });
        } else {
          console.log("data frontend", data);
          this.props.setUser(data);
          this.props.history.push("/user/" + data._id);
        }
      }
    );
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
          <div>
            <label htmlFor="role">Select your role: </label>
            <select
              id="role"
              name="role"
              onChange={this.handleChange}
              defaultValue="Other"
            >
              {roles.map(role => {
                return (
                  <option value={role} key={role}>
                    {role}
                  </option>
                );
              })}
            </select>
          </div>
          {this.state.error && <Alert>{this.state.error}</Alert>}
          <button type="submit">Signup</button>
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

export default Signup;
