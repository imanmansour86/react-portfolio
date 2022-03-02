import React from "react";

const Project = () => {
  return (
    <div class="container">
      <div className="row">
        <div className="col-md-8 .col-xs-12">
          <h2>GetMoving</h2>
          <p>
            Large paragraph Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Exercitationem, aliquam consectetur, tenetur sint officia
            reprehenderit maxime placeat neque debitis voluptatem dolores nisi
            porro velit vero eos tempora possimus atque veritatis?
          </p>

          <a href="#" className="card-link">
            {" "}
            <i className="fa fa-github"></i>Github{" "}
          </a>
          <br />
          <a href="#" className="card-link">
            <i class="fa-solid fa-browser"></i> Deployed
          </a>
        </div>
        <div className="col-md-4 .col-xs-6">
          <img
            width="100%"
            src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
