import React, { Component } from "react";
import { roles } from "../Keywords";
import { FaRegEdit } from "react-icons/fa";

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
            <button type="submit" onClick={this.props.hideForm}>
              SAVE
            </button>
          </>
        ) : profile.role ? (
          <>
            <h2>{profile.role}</h2>
            <button name="role" onClick={this.props.onClick}>
              <FaRegEdit size="14px" color="#2B7A78" />
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
