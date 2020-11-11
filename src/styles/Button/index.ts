/** @jsx jsx */
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { colors } from "styles/Colors";

type IButtonProps = {
  width: number;
};

export const baseButtonStyle = css`
  height: 49px;
  border: none;
  border-radius: 25px;
  opacity: 1;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    background: ${colors.primaryColor} 0% 0% no-repeat padding-box;
    cursor: pointer;
  }
`;

export const PrimaryButton = styled.button(
  css`
    ${baseButtonStyle}
    width: 192px;
    background: ${colors.darkGrey} 0% 0% no-repeat padding-box;
    color: ${colors.white};

    :hover {
      background: ${colors.primaryColor};
    }
  `
);

export const SecondaryButton = styled.button(
  css`
    ${baseButtonStyle}
    width: 156px;
    background: ${colors.aqua} 0% 0% no-repeat padding-box;
    color: ${colors.darkGrey};

    :hover {
      color: ${colors.white};
    }
  `
);

export const GreyButton = styled.button(
  css`
    ${baseButtonStyle}
    width: 192px;
    background: ${colors.darkGrey} 0% 0% no-repeat padding-box;
    color: ${colors.white};
  `
);

export default PrimaryButton;
