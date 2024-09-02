import { HomeIcon, HelpCircleIcon, Car, BellIcon } from "lucide-react";

const Sidebardata = [
  {
    title: "Home",
    path: "/home",
    icon: HomeIcon,
    name: "home",
  },
  {
    title: "Notification",
    path: "/notification",

    icon: BellIcon,
    name: "notification",
  },
  {
    title: "My Orders",
    path: "/orders",

    icon: Car,
    name: "orders",
  },
  {
    title: "Help",
    path: "/help",

    icon: HelpCircleIcon,
    name: "help",
  },
];

export default Sidebardata;

// import homeIcon from "../../assets/icons/homeIcon.svg";
// import bellIcon from "../../assets/icons/bellIcon.svg";
// import carIcon from "../../assets/icons/carIcon.svg";
// import helpIcon from "../../assets/icons/helpIcon.svg";

// export const Sidebardata = [
//   {
//     title: "Home",
//     path: "/home",
//     icon: homeIcon,
//     name: "home",
//   },
//   {
//     title: "Notification",
//     path: "/notification",
//     icon: bellIcon,
//     name: "notification",
//   },
//   {
//     title: "My Orders",
//     path: "/orders",
//     icon: carIcon,
//     name: "orders",
//   },
//   {
//     title: "Help",
//     path: "/help",
//     icon: helpIcon,
//     name: "help",
//   },
//   {
//     title: "My Profile",
//     path: "/profile",
//     icon: userIcon,
//     name: "profile",
//   },
// ];

// export default Sidebardata;
