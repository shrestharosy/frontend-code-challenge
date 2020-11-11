import styled from "@emotion/styled";

import { sm } from "constants/index";
import { mq } from "styles/media-queries/index";

export const DashboardWrapper = styled.div``;

export const DashboardHeader = styled.div`
  height: 256px;
  max-width: 100%;
  width: 100%;
  background: rgba(70, 72, 195, 0.06);
  border-radius: 0px 0px 24px 0px;
  padding: 50px 58px 86px 60px;

  span {
    color: #3d3fa8;
    margin-left: 5px;
  }

  h1 {
    font-size: 36px;
    color: #2c2c2c;
    line-height: 72px;
    font-weight: normal;
    padding-left: 223px;

    ${mq(sm)} {
      font-size: 24px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 54px;
    color: #555555;
    padding-left: 223px;

    ${mq(sm)} {
      font-size: 20px;
    }
  }
`;
