import React from "react";
// import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
// import JobListings from "../components/JobListings";
// import ViewAllJobs from "../components/ViewAllJobs";
import Articles from "../components/Articles";
const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HomeCard />
      <Articles />

      {/* <JobListings isHome={true} />
      <ViewAllJobs /> */}
    </>
  );
};

export default HomePage;
