import React, { Component } from "react";
import { FaRegEdit } from "react-icons/fa";

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
            <button type="submit" onClick={this.props.hideForm}>
              Save
            </button>
          </>
        ) : profile.location ? (
          <>
            <button name="location" onClick={this.props.onClick}>
              {profile.location}
              <FaRegEdit size="14px" color="#2B7A78" />
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
