// menuData.js
export const menuItems = [
  {
    title: "Dashboards",
    icon: "ti ti-smart-home",
    path: "/",
  },
  {
    title: "Apps",
    icon: "ti ti-apps",
    dropdown: [
      { label: "Emails", path: "/about" },
      { label: "Email Read", path: "/email-read" },
      { label: "Chat", path: "/chat" },
      { label: "Contact List", path: "/contacts" },
      { label: "Calendar", path: "/calendar" },
      { label: "Invoice", path: "/invoice" },
    ],
  },
];
