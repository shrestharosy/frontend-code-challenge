import styled from "@emotion/styled";

import { colors } from "styles/Colors";
import { fontWeights } from "styles/Typography";

export const RecommendationWrapper = styled.div`
  width: 1025px;
  height: 93px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 10px #a9a9a91a;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
  padding: 0px 32px 0px 36px;
  margin-bottom: 8px;
`;

export const RecommendationIcon = styled.div`
  width: 48px;
  height: 48px;
  line-height: 54px;
  border-radius: 50%;
  text-align: center;
  background: rgba(244, 244, 250, 0.7);
`;

export const RecommendationContent = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: bold;
`;

export const RecommendationDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  span {
    margin-top: 8px;
    width: 418px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const RecommendationPrice = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${colors.textgrey};
    font-size: 10px;
    font-weight: ${fontWeights.medium};
  }

  div {
    color: ${colors.darkGrey};
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
  }
`;

export const RecommendationButton = styled.div``;
