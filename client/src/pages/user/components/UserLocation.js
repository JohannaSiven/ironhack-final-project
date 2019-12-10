import React, { Component } from "react";

import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
export default class UserLocation extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        {this.props.showForm === "location" ? (
          <>
            <input
              type="text"
              name="location"
              value={this.props.value}
              onChange={this.props.onChange}
            />
            <button
              className="saveButton"
              type="submit"
              onClick={this.props.hideForm}
            >
              <FaCheck />
            </button>
          </>
        ) : profile.location ? (
          <>
            <h3 className="inline">{profile.location}</h3>
            <button
              className="editButton location"
              name="location"
              onClick={this.props.onClick}
            >
              <FaPen />
            </button>
          </>
        ) : (
          <>
            <button
              className="editButton location"
              name="location"
              onClick={this.props.onClick}
            >
              ADD LOCATION
            </button>
          </>
        )}
      </>
    );
  }
}
