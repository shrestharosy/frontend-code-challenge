import styled from "@emotion/styled";
import { md } from "constants/index";
import { mq } from "styles/media-queries";

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  input {
    margin-right: 20px;
    margin-bottom: 12px;
  }

  ${mq(md)} {
    flex-wrap: nowrap;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #9f9f9f;
  padding-top: 24.5px;
`;
