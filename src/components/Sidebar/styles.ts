import { sm } from "./../../constants/index";
import { mq } from "./../../styles/media-queries/index";
import styled from "@emotion/styled";

import { colors } from "styles/Colors";

export const Wrapper = styled.div`
  width: 223px;
  height: 100vh;
  max-width: 223px;
  min-width: 80px;
  position: fixed;
  background: transparent
    linear-gradient(345deg, ${colors.gradient1}, ${colors.gradient2}) 0% 0%;
  border-radius: 0px 47px 0px 0px;
  padding: 50px 0px 23px 0px;
  transition: 0.5s;
  display: none;
  overflow: hidden;

  ${mq(sm)} {
    display: block;
  }
`;

export const Header = styled.div`
  height: 113px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 40px;
  margin-bottom: 45px;
  color: ${colors.white};

  div {
    width: 60px;
    height: 60px;

    img {
      width: 100%;
      height: 100%;
      margin-left: -5px;
    }
  }

  h4 {
    font-size: 14px;
    line-height: 17px;
    margin-top: 13px;
    color: ${colors.white};
  }

  a {
    font-size: 12px;
    margin-top: 8px;
    line-height: 15px;
    color: ${colors.white};
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const List = styled.ul`
  .active {
    background: rgba(242, 242, 242, 0.1) 0% 0% no-repeat padding-box;
    border-radius: 0px 23px 0px 24px;
  }
`;

export const ListItem = styled.li`
  height: 47px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: ${colors.white};
  font-weight: bold;
  font-size: 12px;
  padding: 16px 0px 16px 40px;
  cursor: pointer;

  :nth-of-type(4) {
    span {
      margin-left: -2px;
    }
  }

  :hover {
    background: rgba(242, 242, 242, 0.1) 0% 0% no-repeat padding-box;
    border-radius: 0px 23px 0px 24px;
  }

  i {
    margin-right: 8px;
    color: ${colors.white};
  }

  span {
    color: ${colors.white};
  }
`;

export const Footer = styled.div`
  width: 176px;
  height: 156px;
  position: absolute;
  bottom: 23px;
  left: 24px;
  padding: 18px 24px 25px 24px;
  background: rgb(68, 70, 190, 0.24) 0% 0% no-repeat padding-box;
  border-radius: 0px 23px 0px 24px;
  color: white;
`;

export const FooterHead = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  padding-bottom: 33px;
  color: ${colors.white};

  i {
    color: ${colors.white};
  }
`;

export const FooterBody = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
`;

export const FooterIcons = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 25px;

  li {
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 50%;
    text-align: center;
    background: rgba(68, 70, 190, 0.7);
  }
`;
