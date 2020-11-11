import styled from "@emotion/styled";

import { mq } from "styles/media-queries";
import { md } from "./../../../constants";

export const GymCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${mq(md)} {
    margin: -56px 0px 0px 60px;
    padding: 0px 60px 0px 223px;
  }
`;
