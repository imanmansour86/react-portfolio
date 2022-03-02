import React from "react";

const Project = (props) => {
  return (
    <div className="container">
      {props.projects.map((project) => (
        <div key={project.id} className="row">
          <div className="col-md-8 .col-xs-12">
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <a href={project.repoLink} className="card-link" target="_blank">
              {" "}
              <i className="fa fa-github"></i>Github{" "}
            </a>
            <br />
            <a href="#" className="card-link">
              <i className="fa-solid fa-browser"></i> Deployed
            </a>
          </div>
          <div className="col-md-4 .col-xs-6">
            <img
              width="100%"
              src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
