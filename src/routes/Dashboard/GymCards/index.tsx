import React from "react";

import { GymCardsContainer } from "./styles";
import Card from "components/Card";

const GymCards = () => {
  return (
    <GymCardsContainer>
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
    </GymCardsContainer>
  );
};

export default GymCards;
