import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const Container = styled.div`
  .divActive {
    background-color: white;
    font-size: 14px;
    color: #17252a;
    position: absolute;
    top: ${props => props.top}vh;
    right: 8rem;
    z-index: 999;
    transition: top 0.5s ease;
  }

  .navLinks {
    color: #17252a;
  }

  h3 {
    padding: 0.5rem 0.8rem;
    background-color: #def2f1;
    border-bottom: 1px solid gray;
  }

  .rad-dropmenu-item:before {
    content: "";
    position: absolute;
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: #def2f1 transparent;
    top: -0.6rem;
    right: 2.1rem;
  }

  .listItem {
    list-style: none;
    border-bottom: 1px solid gray;
    padding-bottom: 0.5rem;
  }
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
    if (document.getElementById(id).style.display === "") {
      document.getElementById(id).style.display = "none";
    } else {
      document.getElementById(id).style.display = "";
    }
  };

  showNotification = () => {
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

    this.setState({
      show: !this.state.show
    });

    if (this.state.show) {
      this.setState({
        top: 8
      });
    } else {
      this.setState({
        top: -100
      });
    }
  };

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
          <div className="divActive rad-dropmenu-item">
            <h3
              onClick={() => {
                this.myUl("myUl");
              }}
            >
              Your Projects
            </h3>

            <ul
              id="myUl"
              style={{
                listStyleType: "none",
                display: "none",
                padding: "0 0.7rem"
              }}
            >
              {this.state.myProjects.length > 0 ? (
                <>
                  {this.state.myProjects.map(value => {
                    return (
                      <a
                        style={{ color: "#17252a" }}
                        href={"/projects/" + value._id}
                      >
                        {value.applications ? (
                          <li className="listItem">
                            You have {value.applications.length} applications
                            for {value.title}
                          </li>
                        ) : (
                          <li className="listItem">
                            You have 0 applications for
                            {value.title}
                          </li>
                        )}
                      </a>
                    );
                  })}
                </>
              ) : (
                <p>You have 0 projects</p>
              )}
            </ul>
            <h3
              onClick={() => {
                this.myUl("myApps");
              }}
            >
              Your Applications
            </h3>

            <ul
              id="myApps"
              style={{
                listStyleType: "none",
                display: "none",
                padding: "0 0.7rem"
              }}
            >
              {" "}
              {this.state.myApplications.length > 0 ? (
                <>
                  {this.state.myApplications.map(value => {
                    return (
                      <a
                        style={{ color: "#17252a" }}
                        href={"/projects/" + value._id}
                      >
                        <li className="listItem">
                          You have applied for {value.title}
                        </li>
                      </a>
                    );
                  })}
                </>
              ) : (
                <p>You haven't applied for projects</p>
              )}
            </ul>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default NotificationBox;
