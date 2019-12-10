import React, { Component } from "react";
import { roles } from "../Keywords";

import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

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
            <button
              className="saveButton"
              type="submit"
              onClick={this.props.hideForm}
            >
              <FaCheck />
            </button>
          </>
        ) : profile.role ? (
          <>
            <h2 className="inline">{profile.role}</h2>
            <button
              className="editButton"
              name="role"
              onClick={this.props.onClick}
            >
              <FaPen />
            </button>
          </>
        ) : (
          <>
            <button
              className="editButton"
              name="role"
              onClick={this.props.onClick}
            >
              ADD ROLE
            </button>
          </>
        )}
      </>
    );
  }
}
