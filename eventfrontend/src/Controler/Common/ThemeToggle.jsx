// ThemeToggle.js
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      document.body.setAttribute("data-layout-mode", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      document.body.setAttribute("data-layout-mode", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
       id="toggle-theme" className="flex rounded-full md:mr-0 relative">
      {darkMode ?  <i class="ti ti-moon top-icon"></i> : <i class="ti ti-sun top-icon"></i>}
    </button>
  );
}
