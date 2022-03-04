import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./Footer";

const PortfolioContainer = () => {
  //set initial state to render Portfolio
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlPageChange={handlPageChange} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
};

export default PortfolioContainer;
