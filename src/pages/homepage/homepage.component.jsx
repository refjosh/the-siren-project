import React from "react";
import LandingSection from "../../components/landing-section/landing-section.component";
import TopHeadlines from "../../components/top-headlines/top-headlines.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <LandingSection />
      <TopHeadlines />
    </div>
  );
};

export default HomePage;
