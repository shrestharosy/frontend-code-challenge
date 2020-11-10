import { colors } from "styles/Colors";
import styled from "@emotion/styled";
import { fontWeights } from "styles/Typography";

export const CustomInput = styled.input`
  height: 49px;
  width: 328px;
  border: 1px solid #3c498a;
  border-radius: 4px;
  opacity: 0.42;
  padding-left: 16px;
  position: relative;

  &:focus,
  &:active {
    opacity: 1;
    border: 1px solid #3c498a;

    ::placeholder{
      color: ${colors.primaryColor};
      font-size: 10px;
      position: absolute;
      top: 8px;
      bottom:29px;
    }
  }

  ::placeholder {
    opacity: 1;
    font-size: 14px;
    font-weight: ${fontWeights.medium}
    color: ${colors.textgrey};
  }
`;
