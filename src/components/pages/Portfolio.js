import React from "react";
import getMoving from "../../assets/getMoving.gif";
import maptest from "../../assets/maptest.gif";

const projects = [
  {
    id: 1,
    title: "GetMoving",
    description:
      "Social exercise activity app the allows users to add and view activities, as well as signup for activities.Built using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
    repoLink: "https://github.com/imanmansour86/get-moving",
    demoLink: "https://pacific-wildwood-76799.herokuapp.com/",
    image: "getMoving.gif",
  },

  {
    id: 2,
    title: "Social Network API",
    description:
      "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Built using Express.js, MongoDB, and Mongoose ODM",
    repoLink: "https://github.com/imanmansour86/social-network-API",
    demoLink:
      "https://drive.google.com/file/d/13MybBc7J8yTOBMMDrfyQrGuwH1rOQ4CJ/view",
    image: "socialAPI.gif",
  },

  {
    id: 3,
    title: "Tech Blog",
    description:
      "CMS-style blog site where users can publish blog posts and comment on other’ posts . The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
    repoLink: "https://github.com/imanmansour86/tech-blog",
    demoLink: "https://quiet-mesa-73726.herokuapp.com/",
    image: "techblog.gif",
  },
  {
    id: 4,
    title: "Employee Tracker",
    description:
      "A command-line application that manages a company's employee database. It allows to easily view and interact with employee information stored in databases.Built using Node.js, Inquirer, and MySQL",
    repoLink: "https://github.com/imanmansour86/Employee-Tracker",
    demoLink: "https://watch.screencastify.com/v/NEtzeYUpvafSa7xJlmxW",
    image: "employeeTracker.gif",
  },
  {
    id: 5,
    title: "MapATest",
    description:
      "Location based COVID tests app that shows testing location near you based on user's lat/lng or an address. The test site is displayed as a marker on the map with test locations in infowindow",
    repoLink: "https://github.com/imanmansour86/find-covid-testing",
    demoLink: "https://laurendarrimon.github.io/find-covid-testing/",
    image: "maptest.gif",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      " An app that allows users to see weather conditions for cities. Using OpenWeather API, weather data for cities is displayed. The app uses Geocoding API as well as One Call API to get the results by city name then get the lat/lng to build our data",
    repoLink: "https://github.com/imanmansour86/weather-dashboard",
    demoLink: "https://imanmansour86.github.io/weather-dashboard/",
    image: "weather.gif",
  },
  {
    id: 7,
    title: "Code Quiz",
    description:
      "A timed quiz coding app about JavaScript fundamentals. It runs in the browser and features dynamically updated content powered by Javascript",
    repoLink: "https://github.com/imanmansour86/code-quiz",
    demoLink: "https://imanmansour86.github.io/weather-dashboard/",
    image: "quiz.gif",
  },
];

const Portfolio = () => {
  return (
    <div className="container">
      {projects.map((project) => (
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
                <i className="fa fa-desktop"></i>&nbsp; Deployed
              </a>
            </div>
            <div className="col-md-8 .col-xs-6">
              <img src={require(`../../assets/${project.image}`)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
