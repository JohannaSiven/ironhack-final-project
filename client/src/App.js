import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProjectFeed from "./pages/project/ProjectFeed";

import UserProfile from "./pages/user/UserProfile";

class App extends Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div>
        <Navbar user={this.state.user} clearUser={this.setUser} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={props => <Login {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/signup"
          render={props => <Signup {...props} setUser={this.setUser} />}
        />
<<<<<<< HEAD
        <Route
          exact
          path="/user/:userId"
          render={props => <UserProfile {...props} user={this.state.user} />}
        />
=======
        <Route exact path="/projects" component={ProjectFeed} />
>>>>>>> dev
      </div>
    );
  }
}

export default App;
