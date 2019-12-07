import React, { Component } from "react";

export default class UserDescription extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        {this.props.showForm === "description" ? (
          <>
            <input
              type="text"
              name="description"
              value={this.props.value}
              onChange={this.props.onChange}
            />
            <button type="submit">Save</button>
          </>
        ) : profile.description ? (
          <>
            <p>{profile.description}</p>
            <button name="description" onClick={this.props.onClick}>
              edit
            </button>
          </>
        ) : (
          <>
            <button name="description" onClick={this.props.onClick}>
              Add description
            </button>
          </>
        )}
      </>
    );
  }
}
