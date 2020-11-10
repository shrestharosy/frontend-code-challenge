import React from "react";

import Recommendation from "components/Recommendation";
import { mockRecommendations } from "mock";
import Section from "components/Section";

const RecommendedPackages = () => {
  return (
    <Section
      title={"Recommended Tour Packages"}
      description={
        "These recommendations are based on your profile information."
      }
    >
      {mockRecommendations.map(({ title, description, price }, index) => (
        <Recommendation
          key={`${title}-${index}`}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </Section>
  );
};

export default RecommendedPackages;
