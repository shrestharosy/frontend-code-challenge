/** @jsx jsx */
import { jsx } from "@emotion/core";

import * as SidebarStyles from "./styles";
import { menus } from "../../constants/menus";

const Sidebar = () => {
  const renderSidebarMenus = () => {
    return (
      <ul>
        {menus.map((menu, index) => (
          <SidebarStyles.ListItem key={`nav-menu-${index}`}>
            <i className={`fa fa-${menu.icon} fa-lg`} aria-hidden="true"></i>
            <span>{menu.title}</span>
          </SidebarStyles.ListItem>
        ))}
      </ul>
    );
  };

  return (
    <SidebarStyles.Wrapper>
      <SidebarStyles.Header>
        <div>
          <img src="assets/images/profile_image@2x.png" alt="" />
        </div>
        <h4>Jimmy Hendrix</h4>
        <a href="#">View Profile</a>
      </SidebarStyles.Header>

      <nav>{renderSidebarMenus()}</nav>

      <SidebarStyles.Footer>
        <SidebarStyles.FooterHead>
          My Mentor
          <i className={`fa fa-long-arrow-right fa-lg`} aria-hidden="true"></i>
        </SidebarStyles.FooterHead>
        <SidebarStyles.FooterBody>Jimmy Page</SidebarStyles.FooterBody>
        <SidebarStyles.FooterIcons>
          <li>
            <img src={"assets/svg/ic-call.svg"} alt="call" />
          </li>
          <li>
            <img src={"assets/svg/ic-mail.svg"} alt="mail" />
          </li>
          <li>
            <img src={"assets/svg/ic-chat.svg"} alt="chat" />
          </li>
        </SidebarStyles.FooterIcons>
      </SidebarStyles.Footer>
    </SidebarStyles.Wrapper>
  );
};

export default Sidebar;
