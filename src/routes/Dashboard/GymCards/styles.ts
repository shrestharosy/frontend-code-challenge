import styled from "@emotion/styled";

import { mq } from "styles/media-queries";
import { sm, md } from "./../../../constants";

export const GymCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${mq(sm)} {
    margin-left: 60px;
    padding: 0px 60px 0px 223px;
  }

  ${mq(md)} {
    margin-top: -56px;
  }
`;
