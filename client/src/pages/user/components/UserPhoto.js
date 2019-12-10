import React, { Component } from "react";

import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default class UserPhoto extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        <img src={profile.photo} alt={profile.username} />
        <div className="newPhoto">
          <label htmlFor="image" className="editButton">
            <FaPen />
          </label>
          <input
            id="image"
            type="file"
            name="photo"
            style={{ display: "none" }}
            onChange={e => this.props.handleFileUpload(e)}
          />
          {!this.props.uploadOn && (
            <button
              className="saveButton"
              type="submit"
              disabled={this.props.uploadOn}
            >
              <FaCheck />
            </button>
          )}
        </div>
      </>
    );
  }
}
