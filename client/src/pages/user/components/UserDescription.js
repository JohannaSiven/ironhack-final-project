import React, { Component } from "react";

import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
export default class UserDescription extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        {this.props.showForm === "description" ? (
          <>
            <textarea
              type="text"
              name="description"
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
        ) : profile.description ? (
          <>
            <p>{profile.description}</p>
            <button
              className="editButton"
              name="description"
              onClick={this.props.onClick}
            >
              <FaPen />
            </button>
          </>
        ) : (
          <>
            <button
              className="editButton"
              name="description"
              onClick={this.props.onClick}
            >
              ADD DESCRIPTION
            </button>
          </>
        )}
      </>
    );
  }
}
