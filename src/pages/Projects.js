import React from "react";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "Sign Language Interpreter",
      desc: "A real-time sign language detection app using Python, OpenCV, and MediaPipe to translate gestures into text.",
      link: "https://github.com/sakets-dev/sign_language_detector",
      tech: "Python, OpenCV, MediaPipe, KNN",
    },
    {
      title: "Morse Code Decoder API",
      desc: "A Flask-based API that encodes and decodes Morse code messages, complete with a web interface for instant testing.",
      link: "https://github.com/sakets-dev/morse-decoder-app",
      tech: "Python, Flask, HTML, CSS, JavaScript",
    },
    {
      title: "Vision-Controlled Mouse",
      desc: "A Python application that uses computer vision and hand tracking to control your mouse cursor with hand gestures in real-time.",
      link: "https://github.com/sakets-dev/vision_controlled_mouse",
      tech: "Python, OpenCV, MediaPipe, PyAutoGUI, NumPy",
    },
    {
      title: "Sticky Note Chrome Extension",
      desc: "A Chrome extension that lets users create and save sticky notes on any webpage — all data persists even after logout.",
      link: "https://github.com/sakets-dev/sticky-note-extension",
      tech: "HTML, CSS, JavaScript, Chrome APIs",
    },
  ];

  const containerGlow =
    "transition-colors duration-[1000ms] ease-in-out hover:transition-shadow hover:duration-[200ms]";

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 transition-all duration-[1000ms] ease-in-out">
      {/* HEADER */}
      <div
        className={`rounded-3xl w-full max-w-6xl text-center mb-10 p-8 border shadow-sm ${containerGlow} ${
          darkMode
            ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
        }`}
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p
          className={`text-base leading-relaxed ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Want to explore more of my work? Check out my{" "}
          <a
            href="https://github.com/sakets-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          . Below are a few of my featured projects that showcase my creativity
          and problem-solving approach.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`rounded-3xl p-6 border shadow-sm ${containerGlow} ${
              darkMode
                ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p
              className={`text-sm mb-3 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {p.desc}
            </p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm hover:underline"
            >
              View Project →
            </a>
            <p
              className={`text-sm mt-3 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Built with: {p.tech}
            </p>
          </div>
        ))}

        {/* Placeholder for future projects */}
        <div
          className={`rounded-3xl p-6 border border-dashed flex items-center justify-center text-center italic ${containerGlow} ${
            darkMode
              ? "bg-[#202023] border-[#2a2a2d] text-gray-400 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-600 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
          }`}
        >
          New projects are in the works...
        </div>
      </div>
    </div>
  );
}
