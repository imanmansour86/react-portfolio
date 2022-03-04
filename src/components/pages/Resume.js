import React from "react";
import resume from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="container">
      <div>
        <h3>Technical Skills</h3>

        <div className="skills">
          <h4>Front-End</h4>
          <ul>
            <li>HTML5/CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </div>

        <div className="skills">
          <h4>Back-End</h4>
          <ul>
            <li>Rest API</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MySQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
            <li>Git/Github</li>
          </ul>
        </div>
{/* <iframe src={resume}/> */}
        {/* <a href={require("../../assets/resume.pdf")} className="card-link" target="_blank">
          {" "}
          <i className="fa fa-file"></i> &nbsp;View Resume{" "}
        </a> */}
      </div>
    </div>
  );
};

export default Resume;
