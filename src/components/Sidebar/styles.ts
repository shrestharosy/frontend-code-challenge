import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 40%;
  height: 100vh;
  max-width: 250px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent linear-gradient(345deg, #262758, #4042b1) 0% 0%;
  border-radius: 0px 47px 0px 0px;
  padding: 50px 0px 23px 0px;
`;

export const Header = styled.div`
  height: 113px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 40px;
  margin-bottom: 45px;
  color: #ffffff;

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
    margin-bottom: 8px;
  }

  a {
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const ListItem = styled.li`
  height: 47px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 16px 68px 16px 40px;

  :hover {
    background: rgba(242, 242, 242, 0.1) 0% 0% no-repeat padding-box;
    border-radius: 0px 23px 0px 24px;
    cursor: pointer;
  }

  :nth-child(4) {
    margin-left: -2px;
  }

  i {
    margin-right: 8px;
  }
`;
