import React, { Component } from "react";
import { signup } from "../../services/user";
import { Alert } from "./styles";
import { roles } from "../user/Keywords";
import { FaLinkedin } from "react-icons/fa";

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
    signup(this.state.username, this.state.password, this.state.role).then(
      data => {
        if (data.message) {
          this.setState({
            error: data.message
          });
        } else {
          this.props.props.setUser(data);
          this.props.props.history.push("/user/" + data._id);
        }
      }
    );
  };

  render() {
    return (
      <div className="authContainer login">
        <form onSubmit={this.handleSubmit}>
          <h2>SIGN UP</h2>
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
          {/* <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div> */}
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
          {/* <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div> */}
          <div className="role">
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
          <button type="submit">Signup</button>
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

export default Signup;
