import {
  LayoutDashboard,
  Users,
  FolderKanban,
  BarChart3,
  Settings,
  User,
  BriefcaseBusiness,
  BookUser,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    icon: FolderKanban,
    href: "/project",
    children: [
      { title: "Add New Project", href: "/project/add" },
    ],
  },
  // {
  //   title: "Tasks",
  //   icon: ListTodo,
  //   href: "/task",
  //   children: [
  //     { title: "My Tasks", href: "/tasks/my" },
  //     { title: "All Tasks", href: "/tasks" },
  //   ],
  // },
  {
    title: "User",
    href: "/user",
    icon: User,
    children: [
      { title: "Add New User", href: "/user/add" },
    ],
  },
  {
    title: "Designation",
    href: "/designation",
    icon: BriefcaseBusiness,
    children: [
      { title: "Add New Designation", href: "/designation/add" },
    ],
  },
  {
    title: "Team",
    href: "/team",
    icon: Users,
    children: [
      { title: "Add New Team", href: "/team/add" },
    ],
  },
  {
    title: "Client",
    href: "/client",
    icon: BookUser,
    children: [
      { title: "Add New Client", href: "/client/add" },
    ],
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
export default menus;