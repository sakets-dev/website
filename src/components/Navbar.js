import React from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-center mt-8">
      <ul
        className={`inline-flex items-center rounded-full px-8 py-3 shadow-sm transition-all duration-500 ${
          darkMode
            ? "bg-[#1a1a1d] text-gray-100"
            : "bg-[#f1f2f4] text-gray-800"
        }`}
      >
        {["Home", "Projects", "Facts"].map((item, index) => (
          <li
            key={index}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              index === 0
                ? darkMode
                  ? "bg-[#2b2b30] text-white font-semibold"
                  : "bg-gray-200 text-gray-900 font-semibold"
                : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {item}
          </li>
        ))}

        {/* DARK MODE TOGGLE */}
        <li
          onClick={() => setDarkMode(!darkMode)}
          className={`ml-3 p-2 rounded-full cursor-pointer transition-all duration-300 ${
            darkMode
              ? "bg-[#2b2b30] hover:bg-[#3a3a3f]"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </li>
      </ul>
    </nav>
  );
}
