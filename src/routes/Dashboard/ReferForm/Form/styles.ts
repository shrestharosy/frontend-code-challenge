import { colors } from "styles/Colors";
import styled from "@emotion/styled";
import { fontWeights } from "styles/Typography";

export const FormRow = styled.div`
display: flex;
justify-content: space:between;
flex-wrap: wrap;
input{
  margin-right: 20px;
  margin-bottom: 12px;
}
`;

export const FormFooter = styled.div`
  width: 676px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #9f9f9f;
  padding-top: 24.5px;
`;
