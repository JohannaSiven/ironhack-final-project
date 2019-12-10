import React from "react";
import { Link } from "react-router-dom";

const ProjectCards = props => {
  let projects = props.projects.filter(project => project.status === "Open");

  if (props.remote) {
    projects = projects.filter(project => project.remote === true);
  }

  if (props.status) {
    projects = projects.filter(project => project.status === "Open");
  }

  if (props.role) {
    projects = projects.filter(project => {
      let availableRoles = project.requiredRoles.map(value => {
        if (value.open) {
          return value.name;
        }
        return false;
      });
      if (availableRoles.includes(props.user.role)) {
        return project;
      }
      return false;
    });
    //
  }

  return (
    <div>
      {projects.map(project => {
        return (
          <div className="cardLink" key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <div className="gridCard">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                {project.tags && (
                  <div>
                    <h4>Keywords</h4>
                    {project.tags.map((tag, index) => {
                      return <p key={index}>{tag}</p>;
                    })}
                  </div>
                )}
                {project.requiredRoles && (
                  <div>
                    <h4>Roles</h4>
                    {project.requiredRoles.map((role, index) => {
                      return <p key={index}>{role.name}</p>;
                    })}
                  </div>
                )}
              </div>
              <div className="cardBottom">
                <p className="date">{project.created_at.slice(0, 10)}</p>
                <p className="seeMore">SEE MORE</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
