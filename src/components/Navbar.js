import React from "react";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Other", path: "/other" },
  ];

  return (
    <nav className="flex justify-center mt-8">
      <ul
        className={`inline-flex items-center rounded-full px-8 py-3 shadow-sm transition-all duration-500 ${
          darkMode ? "bg-[#1a1a1d] text-gray-100" : "bg-[#e8eaed] text-gray-800"
        }`}
      >
        {navItems.map(({ name, path }) => (
          <li key={path} className="px-3">
            <Link
              to={path}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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
          className={`ml-3 p-2 rounded-full cursor-pointer transition-all duration-300 ${
            darkMode
              ? "bg-[#2b2b30] hover:bg-[#3a3a3f]"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </li>
      </ul>
    </nav>
  );
}
