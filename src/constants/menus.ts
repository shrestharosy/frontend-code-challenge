import { routeUrls } from "routeUrls";
interface IMenu {
  title: string;
  url: string;
  icon: string;
}

export const menus: Array<IMenu> = [
  {
    title: "Dashboard",
    url: routeUrls.dashboard,
    icon: "th-large",
  },
  {
    title: "Tasks",
    url: routeUrls.tasks,
    icon: "tasks",
  },
  {
    title: "Gym Clubs",
    url: routeUrls.gymClubs,
    icon: "users",
  },
  {
    title: "Your Connections",
    url: routeUrls.connections,
    icon: "connectdevelop",
  },
  {
    title: "Settings",
    url: routeUrls.settings,
    icon: "cog",
  },
];
