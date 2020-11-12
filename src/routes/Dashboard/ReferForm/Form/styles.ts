import styled from "@emotion/styled";
import { md } from "constants/index";
import { mq, breakpoints } from "styles/media-queries";
import { colors } from "styles/Colors";

export const Blah = styled.div`
  display: flex;
  flex-direction: column;

  .custom-field {
    position: relative;
    font-size: 14px;
    margin-bottom: 10px;
  }

  input {
    height: 49px;
    width: 328px;
    border: 1px solid #3c498a;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    line-height: 17px;

    &:focus {
      + .placeholder {
        top: 10px;
        font-size: 10px;
        margin-bottom: 8px;
      }
    }
    &:focus {
      padding: 16px 0px 0px 12px;
    }
  }

  .placeholder {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.primaryColor};
    transition: all 0.3s ease-in-out;
  }

  .error {
    input {
      border: 1px solid ${colors.red};
    }

    .placeholder {
      color: ${colors.red};
    }
  }

  .active {
    input {
      padding: 16px 0px 0px 12px;
    }
    .placeholder {
      top: 10px;
      font-size: 10px;
      margin-bottom: 8px;
    }
  }

  .text-error {
    color: red;
    margin-left: 6px;
    font-size: 12px;
  }
`;

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
  margin-top: 24.5px;
  padding-top: 24.5px;

  @media (max-width: ${breakpoints.large}px) {
    margin-bottom: 15px;
  }
`;
