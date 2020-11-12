import styled from "@emotion/styled";
import { colors } from "styles/Colors";

export const CustomInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .custom-field {
    position: relative;
    font-size: 14px;
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
    top: 40%;
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
