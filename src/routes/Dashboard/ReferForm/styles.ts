import styled from "@emotion/styled";
import { lg } from "constants/index";
import { mq, breakpoints } from "styles/media-queries";

export const ReferralContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 86px;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f5f7 0% 0% no-repeat padding-box;

    @media (max-width: ${breakpoints.large}px) {
      margin: 0 auto;
    }

    ${mq(lg)} {
      height: 277px;
      width: 308px;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;
