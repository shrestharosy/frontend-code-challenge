import React from "react";

import { DashboardWrapper, DashboardHeader } from "./styles";

import GymCards from "./GymCards";
import RecommendedPackages from "./RecommendedPackages";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardHeader>
        <h3>
          Hello
          <span>Jimmy,</span>
        </h3>
        <h1>What do you want to do today?</h1>
      </DashboardHeader>

      <GymCards />
      <RecommendedPackages />
    </DashboardWrapper>
  );
};

export default Dashboard;
