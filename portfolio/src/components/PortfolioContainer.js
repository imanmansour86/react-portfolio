import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";

const projects = [
  {
    id: 1,
    title: "Social Network API",
    description:
      "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Built using Express.js, MongoDB, and Mongoose ODM",
    repoLink: "https://github.com/imanmansour86/social-network-API",
    demoLink:
      "https://drive.google.com/file/d/13MybBc7J8yTOBMMDrfyQrGuwH1rOQ4CJ/view",
  },
  {
    id: 2,
    title: "Social Network API",
    description:
      "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Built using Express.js, MongoDB, and Mongoose ODM",
    repoLink: "https://github.com/imanmansour86/social-network-API",
    demoLink:
      "https://drive.google.com/file/d/13MybBc7J8yTOBMMDrfyQrGuwH1rOQ4CJ/view",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Project projects={projects} />
    </div>
  );
}
