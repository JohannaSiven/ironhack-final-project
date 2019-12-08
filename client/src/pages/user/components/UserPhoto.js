import React, { Component } from "react";
import { FaRegEdit } from "react-icons/fa";

export default class UserPhoto extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        <img src={profile.photo} alt={profile.username} />
        <div className="newPhoto">
          <label htmlFor="image">
            <FaRegEdit size="20px" color="#2B7A78" />
          </label>
          <input
            id="image"
            type="file"
            name="photo"
            style={{ display: "none" }}
            onChange={e => this.props.handleFileUpload(e)}
          />
          <button type="submit" disabled={this.props.uploadOn}>
            SAVE
          </button>
        </div>
      </>
    );
  }
}
