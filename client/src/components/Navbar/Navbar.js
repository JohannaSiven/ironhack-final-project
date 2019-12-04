import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <Nav active>
        <h1>Navbar</h1>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </Nav>
    );
  }
}
