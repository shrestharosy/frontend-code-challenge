/** @jsx jsx */
import { jsx } from "@emotion/core";

import * as SidebarStyles from "./styles";
import { menus } from "../../constants/menus";

const Sidebar = () => {
  return (
    <SidebarStyles.Wrapper>
      <SidebarStyles.Header>
        <SidebarStyles.ProfileImage />
        <span>Jimmy Hendrix</span>
        <a href="#">View Profile</a>
      </SidebarStyles.Header>
      <nav>
        <ul>
          {menus.map((menu, index) => (
            <SidebarStyles.ListItem key={`nav-menu-${index}`}>
              {menu.title}
            </SidebarStyles.ListItem>
          ))}
        </ul>
      </nav>
    </SidebarStyles.Wrapper>
  );
};

export default Sidebar;
