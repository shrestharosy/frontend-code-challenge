import styled from "@emotion/styled";
import { colors } from "styles/Colors";

export const SelectInputWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  ::before {
    position: absolute;
    z-index: 1;
    content: url("assets/svg/down-arrow.svg");
    top: 16px;
    right: 25px;
    height: 20px;
    width: 20px;
    pointer-events: none;
  }
`;

export const Item = styled.div`
  width: 328px;
  height: 49px;
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 16px 0px 0px 16px;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px 4px 0px 0px;

  span{
    font-size: 14px;
  }
`;

export const Menu = styled.div`
  transition: opacity 0.1s ease;
  position: absolute;
  z-index: 3;
`;
