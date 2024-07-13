import React from "react";
// import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
// import JobListings from "../components/JobListings";
// import ViewAllJobs from "../components/ViewAllJobs";

import ArticlesVisiteur from "../components/ArticlesVisiteur";
import HomeVisitor from "../components/HomeVisitor";
const HomeVisitors = () => {
  return (
    <>
      {/* <Hero /> */}
      <HomeVisitor />
      <ArticlesVisiteur />

      {/* <JobListings isHome={true} />
      <ViewAllJobs /> */}
    </>
  );
};

export default HomeVisitors;
