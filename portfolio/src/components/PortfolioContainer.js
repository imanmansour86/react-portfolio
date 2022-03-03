import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";

const PortfolioContainer = () => {
  //set initial state to render Portfolio
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <About />;
    }
  };

  const handlPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlPageChange={handlPageChange} />
      {renderPage()}
    </div>
  );
};

export default PortfolioContainer;
