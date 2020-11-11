import { sm } from "constants/index";
import styled from "@emotion/styled";

import { colors } from "styles/Colors";
import { mq } from "styles/media-queries";

export const CardWrapper = styled.div`
  height: 92px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0px 5px 10px #a9a9a933;
  border-radius: 4px;
  opacity: 1;
  padding: 15px 20px 16px 24px;
  background: ${colors.white};
  margin: 10px;

  ${mq(sm)} {
    width: 328px;
  }
`;

export const CardImage = styled.div`
  width: 72px;
  height: 60px;

  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 7px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 8px;
`;

export const CardDescription = styled.div`
  color: ${colors.textgrey};
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
`;
