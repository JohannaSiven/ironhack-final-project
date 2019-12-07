import React, { Component } from "react";

export default class UserPhoto extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        <img src={profile.photo} alt={profile.username} />
        <br />
        <label htmlFor="image">Select image</label>
        <input
          id="image"
          type="file"
          name="photo"
          style={{ display: "none" }}
          onChange={e => this.props.handleFileUpload(e)}
        />
        <button type="submit" disabled={this.props.uploadOn}>
          Edit Photo
        </button>
      </>
    );
  }
}
