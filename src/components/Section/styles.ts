import styled from "@emotion/styled";
import { mq } from "styles/media-queries";
import { sm } from "constants/index";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aligh-items: center;
  margin-left: 20px;

  ${mq(sm)} {
    margin-left: 60px;
    padding: 0px 60px 0px 223px;
  }
`;

export const SectionHeading = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
`;
