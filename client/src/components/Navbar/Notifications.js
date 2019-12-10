import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const Container = styled.div`
  background-color: #444;
  color: white;
  padding: 16px;
  position: absolute;
  top: ${props => props.top}vh;
  right: 10px;
  z-index: 999;
  transition: top 0.5s ease;
`;

class NotificationBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: -100,
      show: true,
      myProjects: [],
      myApplications: []
    };
  }

  myUl = id => {
    console.log("heey");
    if (document.getElementById(id).style.display === "") {
      document.getElementById(id).style.display = "none";
    } else {
      document.getElementById(id).style.display = "";
    }
  };

  showNotification = () => {
    this.setState({
      show: !this.state.show
    });
    Axios.get("/api/projects").then(response => {
      let myProjects = response.data.filter(value => {
        if (
          value.owner === this.props.user._id ||
          value.contributors.includes(this.props.user._id)
        ) {
          return value;
        }
        return false;
      });

      let myApplications = response.data.filter(project => {
        if (project.applications) {
          let applicants = project.applications.map(value => value.user);
          if (applicants.includes(this.props.user._id)) {
            return project;
          }
        }
        return false;
      });

      this.setState({
        myProjects: myProjects,
        myApplications: myApplications
      });
    });

    if (this.state.show) {
      this.setState({
        top: 6
      });
    } else {
      this.setState({
        top: -100
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.showNotification}
          className="cool-link notificationButton"
        >
          <FontAwesomeIcon color="white" icon={faBell} />
        </button>
        <Container top={this.state.top}>
          <div>
            <h3
              onClick={() => {
                this.myUl("myUl");
              }}
            >
              Your Projects
            </h3>
            {this.state.myProjects.length > 0 ? (
              <ul id="myUl" style={{ listStyleType: "none", display: "none" }}>
                {this.state.myProjects.map(value => {
                  return (
                    <a href={"/projects/" + value._id}>
                      <li>
                        You have {value.applications.length} applications for{" "}
                        {value.title}
                      </li>
                    </a>
                  );
                })}
              </ul>
            ) : (
              <p>You have 0 projects</p>
            )}
            <h3
              onClick={() => {
                this.myUl("myApps");
              }}
            >
              Your Applications
            </h3>
            {this.state.myApplications.length > 0 ? (
              <ul
                id="myApps"
                style={{ listStyleType: "none", display: "none" }}
              >
                {this.state.myApplications.map(value => {
                  return (
                    <a href={"/projects/" + value._id}>
                      <li>You have applied for {value.title}</li>
                    </a>
                  );
                })}
              </ul>
            ) : (
              <p>You haven't applied for projects</p>
            )}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default NotificationBox;
