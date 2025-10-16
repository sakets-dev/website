import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Navbar from "./components/Navbar";

export default function App() {
  // 🌙 Start in dark mode by default
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#0f0f10] text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* NAVBAR */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* MAIN CONTENT */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24 px-4">
        {/* INTRO */}
        <section
          className={`rounded-3xl p-10 col-span-2 shadow-sm transition-all ${
            darkMode ? "bg-[#1a1a1d]" : "bg-[#f1f2f4]"
          }`}
        >
          <h1 className="text-4xl font-bold mb-3">Hey! I'm Saket Sharma!</h1>
          <div className="space-y-3 leading-relaxed">
            <br />
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Hey there, I'm a student at University of Toronto, double majoring in Computer Science and Statistics.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              I love building products that blend creativity with logic and purpose.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              My curiosity drives me to explore everything, from new frameworks to hidden details in everyday design.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              When I’m not coding, I’m probably reading — lately, I've been reading Freida McFadden's thriller/mystery books.
            </p>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <aside className="flex flex-col gap-6">
          {/* SOCIAL ICONS */}
          <div
            className={`rounded-3xl p-6 shadow-sm ${
              darkMode ? "bg-[#1a1a1d]" : "bg-[#f1f2f4]"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/saket-sharma-3a37871a7/",
                  tooltip: "Saket Sharma",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  link: "https://github.com/sakets-dev",
                  tooltip: "GitHub",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  tooltip: "Saket Sharma",
                },
                {
                  icon: Mail,
                  label: "Mail",
                  tooltip: "saketsharma0406@gmail.com",
                },
              ].map(({ icon: Icon, label, link, tooltip }) => {
                const isClickable = !!link;
                const Container = isClickable ? "a" : "div";

                return (
                  <Container
                    key={label}
                    href={link}
                    target={isClickable ? "_blank" : undefined}
                    rel={isClickable ? "noopener noreferrer" : undefined}
                    className={`group relative flex flex-col items-center justify-center p-3 rounded-xl hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all ${
                      isClickable ? "cursor-pointer" : ""
                    }`}
                  >
                    {/* Tooltip */}
                    <span
                      className={`absolute -top-11 px-3 py-1 text-xs rounded-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-800 text-gray-100 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                          : "bg-white text-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                      }`}
                    >
                      {tooltip}
                    </span>

                    {/* Icon */}
                    <div
                      className={`transition-transform duration-300 group-hover:scale-110 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Label */}
                    <span
                      className={`text-sm mt-1 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {label}
                    </span>
                  </Container>
                );
              })}
            </div>
          </div>

          {/* GOALS */}
          <div
            className={`rounded-3xl p-6 shadow-sm ${
              darkMode ? "bg-[#1a1a1d]" : "bg-[#f1f2f4]"
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">Next Goals</h2>
            <ul
              className={`text-sm leading-relaxed space-y-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>
                <strong>Working on:</strong> A Productivity app
              </li>
              <li>
                <strong>Want to learn:</strong> More Machine Learning
              </li>
              <li>
                <strong>Next goal:</strong> Win a couple upcoming hackathons
              </li>
            </ul>
          </div>
        </aside>
      </main>

      {/* ICON SCROLLER */}
      <div
        className={`max-w-6xl mx-auto mt-10 mb-10 rounded-3xl shadow-sm overflow-hidden relative ${
          darkMode ? "bg-[#1a1a1d]" : "bg-[#f1f2f4]"
        }`}
      >
        <div className="overflow-hidden py-6 relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...icons, ...icons, ...icons].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="tech icon"
                className="h-10 w-10 inline-block object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
