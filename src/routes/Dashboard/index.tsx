import React from "react";

import {
  DashboardWrapper,
  DashboardHeader,
  DashboardCards,
  DashboardRecommendations,
  DashboardRecommendationHeading,
} from "./styles";
import Card from "components/Card";
import Recommendation from "components/Recommendation";
import { SubHeading } from "styles/Typography";
import { mockRecommendations } from "mock";

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
      <DashboardRecommendations>
        <DashboardRecommendationHeading>
          Recommended Tour Packages
        </DashboardRecommendationHeading>
        <SubHeading>
          These recommendations are based on your profile information.
        </SubHeading>
        {mockRecommendations.map(({ title, description, price }, index) => (
          <Recommendation
            key={`${title}-${index}`}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </DashboardRecommendations>
    </DashboardWrapper>
  );
};

export default Dashboard;
