interface IMenu {
  title: string;
  url: string;
  icon: string;
}

export const menus: Array<IMenu> = [
  {
    title: "Dashboard",
    url: "/",
    icon: "th-large",
  },
  {
    title: "Tasks",
    url: "/",
    icon: "tasks",
  },
  {
    title: "Gym Clubs",
    url: "/",
    icon: "users",
  },
  {
    title: "Your connections",
    url: "/",
    icon: "connectdevelop",
  },
  {
    title: "Settings",
    url: "/",
    icon: "cog",
  },
];
