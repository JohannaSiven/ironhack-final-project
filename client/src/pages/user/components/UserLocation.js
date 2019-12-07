import React, { Component } from "react";

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
            <button type="submit">Save</button>
          </>
        ) : profile.location ? (
          <>
            <span>{profile.location}</span>
            <button name="location" onClick={this.props.onClick}>
              edit
            </button>
          </>
        ) : (
          <>
            <button name="location" onClick={this.props.onClick}>
              Add location
            </button>
          </>
        )}
      </>
    );
  }
}
