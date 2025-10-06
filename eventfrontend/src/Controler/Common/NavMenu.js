// menuData.js
export const menuItems = [
  {
    title: "Dashboards",
    icon: "ti ti-smart-home",
    path: "/",
  },
  {
    title: "customer",
    icon: "ti ti-apps",
    dropdown: [
      { label: "Add customer", path: "/Addcustomer" },
      { label: "Email Read", path: "/email-read" },
      { label: "Chat", path: "/chat" },
      { label: "Contact List", path: "/contacts" },
      { label: "Calendar", path: "/calendar" },
      { label: "Invoice", path: "/invoice" },
    ],
  },
];
