import React from "react";
import { Link } from "react-router-dom";

const ProjectCards = props => {
  return (
    <div>
      {props.projects.map(project => {
        return (
          <>
            <div key={project._id}>
              <h3>{project.title}</h3>
              <h4>About: </h4>
              <p>{project.description}</p>
              {project.requiredRoles && (
                <>
                  <h4>Roles required: </h4>
                  {project.requiredRoles.map(role => {
                    return <p>{role}</p>;
                  })}
                </>
              )}
              <h4>Posted: </h4>
              <p>{project.created_at.slice(0, 10)}</p>
              {project.tags && (
                <>
                  <h4>Keywords: </h4>
                  {project.tags.map(tag => {
                    return <p>{tag}</p>;
                  })}
                </>
              )}
              <Link to={`/projects/${project._id}`}>Learn more</Link>
            </div>
            <br />
            <br />
          </>
        );
      })}
    </div>
  );
};

export default ProjectCards;