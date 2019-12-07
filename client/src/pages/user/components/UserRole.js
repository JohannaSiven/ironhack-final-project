import React, { Component } from "react";
import { roles } from "../Keywords";

export default class UserRole extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        {this.props.showForm === "role" ? (
          <>
            <select
              name="role"
              onChange={this.props.onChange}
              defaultValue={profile.role}
            >
              {roles.map(role => {
                return (
                  <option value={role} key={role}>
                    {role}
                  </option>
                );
              })}
            </select>
            <button type="submit">Save</button>
          </>
        ) : profile.role ? (
          <>
            <span>{profile.role}</span>
            <button name="role" onClick={this.props.onClick}>
              edit
            </button>
          </>
        ) : (
          <>
            <button name="role" onClick={this.props.onClick}>
              Add Role
            </button>
          </>
        )}
      </>
    );
  }
}
