import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 30%;
  max-width: 223px;
  min-width: 80px;
  height: 100vh;
  background: transparent linear-gradient(345deg, #262758, #4042b1) 0% 0%;
  border-radius: 0px 47px 0px 0px;
  padding: 50px 0px 23px 0px;
`;

export const Header = styled.div`
  height: 113px;
  display: flex;
  padding: 0px 0px 0px 40px;
  border: 1px solid red;
  flex-direction: column;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  background: transparent url('assets/images/profile_image@2x.png)
`;

export const ListItem = styled.li`
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  border-radius: 0px 23px 0px 24px;
  opacity: 0.1;
  `;
  
  // background: #f2f2f2 0% 0% no-repeat padding-box;