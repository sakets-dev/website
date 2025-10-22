import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Navbar from "./components/Navbar";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

/* ------------------------ PAGE TRANSITION WRAPPER ------------------------ */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- HOME PAGE ------------------------------- */
function Home({ darkMode }) {
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

  const containerGlow =
    "transition-colors duration-[1500ms] ease-in-out hover:transition-shadow hover:duration-[200ms]";

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-4 transition-all duration-[1000ms] ease-in-out">
      {/* INTRO */}
      <section
        className={`rounded-3xl p-10 col-span-2 border shadow-sm ${containerGlow} ${
          darkMode
            ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
        }`}
      >
        <h1 className="text-4xl font-bold mb-3">Hey, I'm Saket!</h1>
        <div className="space-y-3 leading-relaxed">
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            I'm Saket Sharma, a student at University of Toronto, majoring in Computer Science and Statistics.
          </p>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            I love building products that blend creativity with logic and purpose.
          </p>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            My curiosity drives me to explore everything, from new frameworks to hidden details in everyday design.
          </p>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            When I’m not coding, I’m probably reading. Recently I've been reading thriller/mystery books.
          </p>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            I enjoy listening to a variety of music while I spend my hours learning/coding.
          </p>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <aside className="flex flex-col gap-6 transition-all duration-[1500ms] ease-in-out">
        {/* SOCIAL ICONS */}
        <div
          className={`rounded-3xl p-6 border shadow-sm ${containerGlow} ${
            darkMode
              ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
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
                tooltip: "saket.s4",
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
                  className={`group relative flex flex-col items-center justify-center p-3 rounded-xl hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 ${
                    isClickable ? "cursor-pointer" : ""
                  }`}
                >
                  <span
                    className={`absolute -top-11 px-3 py-1 text-xs rounded-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ${
                      darkMode
                        ? "bg-[#202023] text-gray-100 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                        : "bg-white text-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                    }`}
                  >
                    {tooltip}
                  </span>

                  <div
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

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
          className={`rounded-3xl p-6 border shadow-sm ${containerGlow} ${
            darkMode
              ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
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
              <strong>Want to learn:</strong> Airdrop API & Machine Learning
            </li>
            <li>
              <strong>Next goal:</strong> Win cpcoming hackathons
            </li>
          </ul>
        </div>
      </aside>

      {/* ICON SCROLLER */}
      <div
        className={`max-w-[320%] mx-auto mt-2 mb-8 rounded-3xl border shadow-sm overflow-hidden relative ${containerGlow} ${

          darkMode
            ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
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
    </main>
  );
}

/* --------------------------- ANIMATED ROUTES --------------------------- */
function AnimatedRoutes({ darkMode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home darkMode={darkMode} />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects darkMode={darkMode} />
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <Experience darkMode={darkMode} />
            </PageTransition>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ------------------------------- MAIN APP ------------------------------- */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div
          className={`min-h-screen transition-colors duration-[1000ms] ease-in-out ${
          darkMode ? "bg-[#181819] text-gray-100" : "bg-[#c4c5c6] text-gray-800"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatedRoutes darkMode={darkMode} />
      </div>
    </Router>
  );
}
