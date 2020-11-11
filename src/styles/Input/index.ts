import { colors } from "styles/Colors";
import styled from "@emotion/styled";
import { fontWeights } from "styles/Typography";

export const CustomInput = styled.input`
  height: 49px;
  width: 328px;
  border: 1px solid #3c498a;
  border-radius: 4px;
  padding-left: 16px;
  position: relative;
  
  &:focus,
  &:active {
    opacity: 1;
    border: 1px solid #3c498a;

    ::placeholder{
      color: ${colors.primaryColor};
      font-size: 10px;
      transition: all 0.3s ease-in-out;
      transform: translateY(-12px);

      
    }
  }

  ::placeholder {
    opacity: 1;
    font-size: 14px;
    font-weight: ${fontWeights.medium}
    color: ${colors.textgrey};
    transition: all 0.3s ease-in-out;

  }
`;
