/** @jsx jsx */
import { jsx } from "@emotion/core";

import * as SidebarStyles from "./styles";
import { Menus } from "../../constants/menus";

const Sidebar = () => {
  return (
    <SidebarStyles.Sidebar>
      Jimmy Hendrix
      <nav>
        <ul>
          {Menus.map((menu, index) => (
            <li key={`nav-menu-${index}`}>{menu.title}</li>
          ))}
        </ul>
      </nav>
    </SidebarStyles.Sidebar>
  );
};

export default Sidebar;
