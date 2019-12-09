import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProjectFeed from "./pages/project/ProjectFeed";
import ProjectDetails from "./pages/project/ProjectDetails";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import UsersFeed from "./pages/feed/UsersFeed";

class Chat extends Component {
  render() {
    return(
      <div> 
        <div>
        
        </div>
        <form>
          <label htmlFor="text">Message</label>
          <input type="text" name="text" id="text"/>
        </form>
      </div>    )
  }
}

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
        <Route exact path="/chat" component={Chat} />
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
        <Route
          exact
          path="/user/:userId"
          render={props => <Profile {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/projects"
          render={props => <ProjectFeed {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/projects/:projectId"
          render={props => <ProjectDetails {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/dashboard"
          render={props => (
            <Dashboard
              {...props}
              projects={ProjectFeed}
              user={this.state.user}
            />
          )}
        />
        <Route exact path="/users" component={UsersFeed} />
      </div>
    );
  }
}

export default App;
