import React, { useEffect, useRef } from "react";

export default function Projects({ darkMode }) {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting)
            e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach(r => r && observer.observe(r));
    return () => refs.current.forEach(r => r && observer.unobserve(r));
  }, []);

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
      title: "Sticky Note Chrome Extension",
      desc: "A Chrome extension that lets users create and save sticky notes on any webpage — all data persists even after logout.",
      link: "https://github.com/sakets-dev/sticky-note-extension",
      tech: "HTML, CSS, JavaScript, Chrome APIs",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 py-16 transition-colors duration-500"
    >
      {/* HEADER — Now full width like project cards */}
      <div
        className={`rounded-3xl w-full max-w-6xl text-center mb-10 p-8 shadow-sm transition-colors duration-500 ${
          darkMode ? "bg-[#1a1a1d] text-gray-200" : "bg-[#f1f2f4] text-gray-800"
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
            ref={el => (refs.current[i] = el)}
            className={`opacity-0 translate-y-6 transition-all duration-700 ease-out rounded-3xl p-6 shadow-sm border hover:-translate-y-1 hover:shadow-lg transition-colors duration-500 ${
              darkMode
                ? "bg-[#1a1a1d] border-gray-700 text-gray-200"
                : "bg-[#f1f2f4] border-gray-300 text-gray-800"
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

        {/* PLACEHOLDER */}
        <div
          ref={el => (refs.current[projects.length] = el)}
          className={`opacity-0 translate-y-6 transition-all duration-700 ease-out rounded-3xl p-6 shadow-sm border border-dashed flex items-center justify-center text-center italic transition-colors duration-500 ${
            darkMode
              ? "bg-[#1a1a1d] border-gray-600 text-gray-400"
              : "bg-[#f1f2f4] border-gray-400 text-gray-600"
          }`}
        >
          New projects are in the works...
        </div>
      </div>
    </div>
  );
}
