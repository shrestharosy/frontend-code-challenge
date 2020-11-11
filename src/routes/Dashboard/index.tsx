import React from "react";

import { DashboardWrapper, DashboardHeader } from "./styles";

import GymCards from "./GymCards";
import RecommendedPackages from "./RecommendedPackages";
import ReferForm from "./ReferForm";
import PrimaryButton from "styles/Button";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardHeader>
        <div className={'intro'}>
          <h3>
            Hello
            <span>Jimmy,</span>
          </h3>
          <PrimaryButton>Find a gym club</PrimaryButton>
        </div>
        <h1>What do you want to do today?</h1>
      </DashboardHeader>

      <GymCards />
      <RecommendedPackages />
      <ReferForm />
    </DashboardWrapper>
  );
};

export default Dashboard;
