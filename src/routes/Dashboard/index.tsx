import React from "react";

import { DashboardWrapper, DashboardHeader, DashboardCards } from "./styles";
import Card from "components/Card";

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

      <DashboardCards>
        <Card
          imageUrl={"assets/images/card1.png"}
          title={"Fill up the form"}
          description={"Fill in your basic information to join the Gym Club."}
        />
        <Card
          imageUrl={"assets/images/card2.png"}
          title={"Find your perfect gym"}
          description={
            "Easily find your perfect gym club and join the club instantly."
          }
        />
        <Card
          imageUrl={"assets/images/card3.png"}
          title={"Track your progress"}
          description={"Analyze and plan for your tasks and progress."}
        />
      </DashboardCards>
    </DashboardWrapper>
  );
};

export default Dashboard;
