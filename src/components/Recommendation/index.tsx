/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import {
  RecommendationWrapper,
  RecommendationIcon,
  RecommendationContent,
  RecommendationPrice,
  RecommendationDetails,
} from "./styles";
import { FC } from "react";
import { SubHeading } from "styles/Typography";
import { SecondaryButton } from "styles/Button";

export interface IRecommendationProps {
  title: string;
  description: string;
  price: string;
}

const Recommendation: FC<IRecommendationProps> = ({
  title,
  description,
  price,
}) => (
  <RecommendationWrapper>
    <RecommendationContent>
      <RecommendationIcon>
        <img src="assets/svg/airplane.svg" alt="" />
      </RecommendationIcon>
      <RecommendationDetails>
        {title}
        <SubHeading>{description}</SubHeading>
      </RecommendationDetails>
    </RecommendationContent>

    <RecommendationPrice>
      <span>ESTIMATED PRICE</span>
      <div>$ {price}</div>
    </RecommendationPrice>

    <SecondaryButton>ORDER NOW</SecondaryButton>
  </RecommendationWrapper>
);

export default Recommendation;
