import { sm } from "constants/index";
import styled from "@emotion/styled";
import { mq } from "styles/media-queries";

export const ReferralContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .image {
    height: 277px;

    ${mq(sm)} {
      width: 308px;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;
