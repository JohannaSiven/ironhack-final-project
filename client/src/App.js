import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import ProjectFeed from "./pages/project/ProjectFeed";
import ProjectDetails from "./pages/project/ProjectDetails";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import UsersFeed from "./pages/feed/UsersFeed";
import Inbox from "./pages/chat/Inbox";
import InboxChat from "./pages/chat/InboxChat";

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
          path="/auth"
          render={props => <Auth {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/user/:userId"
          render={props => {
            if (this.state.user) {
              return <Profile {...props} user={this.state.user} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/projects"
          render={props => {
            if (this.state.user) {
              return <ProjectFeed {...props} user={this.state.user} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/projects/:projectId"
          render={props => {
            if (this.state.user) {
              return <ProjectDetails {...props} user={this.state.user} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/dashboard"
          render={props => {
            if (this.state.user) {
              return (
                <Dashboard
                  {...props}
                  projects={ProjectFeed}
                  user={this.state.user}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/users"
          render={props => {
            if (this.state.user) {
              return <UsersFeed />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <div className="chatPage">
          <Route
            path="/inbox"
            render={props => {
              if (this.state.user) {
                return <Inbox {...props} user={this.state.user} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            path="/inbox/:id"
            render={props => {
              if (this.state.user) {
                return <InboxChat {...props} user={this.state.user} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
