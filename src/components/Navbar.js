import React from "react";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  // Colors we want to animate between
  const bg = darkMode ? "#202023" : "#e8eaed";
  const border = darkMode ? "#2a2a2d" : "#d8d8d8";
  const toggleBg = darkMode ? "#2b2b30" : "#d1d5db";     // gray-300
  const toggleHover = darkMode ? "#3a3a3f" : "#9ca3af";  // gray-400

  // Hover shadows (kept at 200ms)
  const hoverShadowDark = "0 0 35px rgba(255,255,255,0.15)";
  const hoverShadowLight = "0 0 45px rgba(0,0,0,0.25)";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
  ];

  return (
    <nav
      className="flex justify-center pt-10 pb-6"
      style={{
        transition: "background-color 1000ms ease, color 1000ms ease",
      }}
    >
      <ul
        className={`inline-flex items-center rounded-full px-8 py-3 border backdrop-blur-md ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
        style={{
          backgroundColor: bg,
          borderColor: border,
          // Smooth color change (1000ms) + fast hover shadow (200ms)
          transition:
            "background-color 1000ms ease, border-color 1000ms ease, box-shadow 200ms ease",
          // Hover shadow applied inline so it uses the 200ms part only
          boxShadow: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = darkMode
            ? hoverShadowDark
            : hoverShadowLight;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {navItems.map(({ name, path }) => (
          <li key={path} className="px-3">
            <Link
              to={path}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-700 ease-in-out ${
                location.pathname === path
                  ? darkMode
                    ? "bg-[#2b2b30] text-white font-semibold"
                    : "bg-gray-300 text-gray-900 font-semibold"
                  : darkMode
                  ? "text-gray-400 hover:text-white hover:font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:font-medium"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}

        {/* DARK MODE TOGGLE */}
        <li
          onClick={() => setDarkMode(!darkMode)}
          className="ml-3 p-2 rounded-full cursor-pointer"
          style={{
            backgroundColor: toggleBg,
            transition: "background-color 1000ms ease", // smooth theme fade
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = toggleHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = toggleBg;
          }}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </li>
      </ul>
    </nav>
  );
}
