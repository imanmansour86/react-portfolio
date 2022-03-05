import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";
import Aos from "aos";

const App = () => {
  Aos.init();
  return <PortfolioContainer />;
};

export default App;
