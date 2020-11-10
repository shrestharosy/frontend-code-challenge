import React from "react";

import { Recommendations, RecommendationHeading } from "./styles";
import Recommendation from "components/Recommendation";
import { SubHeading } from "styles/Typography";
import { mockRecommendations } from "mock";

const RecommendedPackages = () => {
  return (
    <Recommendations>
      <RecommendationHeading>Recommended Tour Packages</RecommendationHeading>
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
    </Recommendations>
  );
};

export default RecommendedPackages;
