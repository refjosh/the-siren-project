import React from "react";
import Header from "../../components/header/header.component";
import LandingSection from "../../components/landing-section/landing-section.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <LandingSection />
    </div>
  );
};

export default HomePage;
