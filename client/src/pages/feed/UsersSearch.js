import React, { Component } from "react";

export default class UsersSearch extends Component {
  handleChange = event => {
    this.props.setQuery(event.target.name, event.target.value);
  };

  render() {
    return (
      <div className="userSearch">
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
          placeholder="Search for users"
        />
        <input
          type="text"
          name="city"
          value={this.props.city}
          onChange={this.handleChange}
          placeholder="Search for City"
        />
      </div>
    );
  }
}
