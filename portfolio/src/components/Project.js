import React from "react";

const Project = (props) => {
  return (
    <div className="container">
      {props.projects.map((project) => (
        <div>
          <h3>{project.title}</h3>
          <div key={project.id} className="row">
            <div className="col-md-4 .col-xs-12">
              <p>{project.description}</p>

              <a href={project.repoLink} className="card-link" target="_blank">
                {" "}
                <i className="fa fa-github"></i> &nbsp;Github{" "}
              </a>
              <br />
              <a href="#" className="card-link">
                <i class="fa fa-desktop"></i>&nbsp; Deployed
              </a>
            </div>
            <div className="col-md-8 .col-xs-6">
              <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
