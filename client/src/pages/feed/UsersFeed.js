import React, { Component } from "react";
import UsersList from "./UsersList";
import axios from "axios";
import UsersSearch from "./UsersSearch";
import RoleSelect from "../project/RoleSelect";

import { Container } from "./styles";

export default class extends Component {
  state = {
    users: [],
    query: "",
    roles: [],
    city: ""
  };

  getData() {
    axios
      .get("/api/profiles")
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  setQuery = (target, value) => {
    console.log(target, value);
    this.setState({
      [target]: value
    });
  };

  componentDidMount() {
    this.getData();
  }

  onSelect = event => {
    console.log(event);
    this.setState({
      roles: event
    });
  };

  onRemove = event => {
    this.setState({
      roles: event
    });
    console.log(this.state.roles);
  };

  render() {
    return (
      <Container className="main">
        <div className="bg-header" />
        <div className="container">
          <h1>Users</h1>
          <UsersSearch
            city={this.state.city}
            query={this.state.query}
            setQuery={this.setQuery}
          />
          <RoleSelect onSelect={this.onSelect} onRemove={this.onRemove} />
          <UsersList
            city={this.state.city}
            roles={this.state.roles}
            query={this.state.query}
            users={this.state.users}
            user={this.props.user}
          />
        </div>
      </Container>
    );
  }
}
