import React, { Component } from "react";
import axios from "axios";

export default class MyProjects extends Component {
  state = {
    myProjects: []
  };

  getProjects() {
    axios
      .get("/api/projects")
      .then(response => {
        console.log(response.data);
        let myProjects = response.data.filter(value => {
          if (
            value.owner === this.props.user._id ||
            value.contributors.includes(this.props.user._id)
          ) {
            return value;
          }
          return false;
        });
        this.setState({
          myProjects: myProjects
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          backgroundColor: "lightgray"
        }}
      >
        {this.state.myProjects.map(value => {
          return (
            <div key={value._id}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <h3>Tags</h3>
              {value.tags.map((value, index) => {
                return <p key={index}>{value}</p>;
              })}
              {value.owner === this.props.user._id && (
                <p style={{ color: "red" }}>I am the Owner</p>
              )}
              <h5>Applications</h5>

              {value.applications && (
                <p>
                  You have new applications for the following roles:{" "}
                  {value.applications.map(applicant => applicant.role + " ")}
                </p>
              )}
              <a href={`/projects/${value._id}`}>See Project</a>
            </div>
          );
        })}
      </div>
    );
  }
}
