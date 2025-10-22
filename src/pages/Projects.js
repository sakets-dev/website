import React, { useState } from "react";
import { Hand, MousePointerClick, Minus, StickyNote } from "lucide-react";

export default function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Sign Language Interpreter",
      color: {
        light: "bg-blue-100 text-blue-700 border-blue-200",
        dark: "bg-blue-900 text-blue-300 border-blue-700",
      },
      icon: (
        <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center shadow-sm">
          <Hand size={20} className="text-blue-500 dark:text-blue-300" />
        </div>
      ),
      about:
        "A real time sign language detection app using Python, OpenCV, and MediaPipe to translate gestures into text. It processes hand landmarks and recognizes gestures through a KNN classifier for accurate and fast translation. The application captures video input, extracts hand keypoints, and uses machine learning to classify different sign language gestures into readable text output.",
      nextSteps:
        "I'd love to expand the vocabulary to include more complex signs, implement multi hand gesture recognition, and add support for different sign languages like ASL and BSL. I'm also really interested in learning more about neural networks to improve gesture classification accuracy.",
      link: "https://github.com/sakets-dev/sign_language_detector",
      tech: "Python, OpenCV, MediaPipe, KNN",
    },
    {
      title: "Vision-Controlled Mouse",
      color: {
        light: "bg-green-100 text-green-700 border-green-200",
        dark: "bg-green-900 text-green-300 border-green-700",
      },
      icon: (
        <div className="p-2.5 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center shadow-sm">
          <MousePointerClick size={20} className="text-green-500 dark:text-green-300" />
        </div>
      ),
      about:
        "A Python application that uses computer vision and hand tracking to control your mouse cursor with hand gestures in real time. It employs MediaPipe for landmark detection and PyAutoGUI for precise cursor movement.",
      nextSteps:
        "I want to add more gesture controls like right click, scroll, and drag and drop functionality. I'm also really interested in learning about hand pose estimation and possibly integrating voice commands.",
      link: "https://github.com/sakets-dev/vision_controlled_mouse",
      tech: "Python, OpenCV, MediaPipe, PyAutoGUI, NumPy",
    },
    {
      title: "Morse Code Decoder API",
      color: {
        light: "bg-yellow-100 text-yellow-800 border-yellow-200",
        dark: "bg-yellow-900 text-yellow-300 border-yellow-700",
      },
      icon: (
        <div className="p-2.5 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center shadow-sm">
          <Minus size={20} className="text-yellow-500 dark:text-yellow-300" />
        </div>
      ),
      about:
        "A Flask-based API that encodes and decodes Morse code messages, complete with a web interface for instant testing. Built as a REST service for real-time text-to-Morse translation and decoding.",
      nextSteps:
        "I'd love to add audio input/output capabilities for real Morse code transmission and explore machine learning for automatic Morse code recognition.",
      link: "https://github.com/sakets-dev/morse-decoder-app",
      tech: "Python, Flask, HTML, CSS, JavaScript",
    },
    {
      title: "Sticky Note Chrome Extension",
      color: {
        light: "bg-pink-100 text-pink-700 border-pink-200",
        dark: "bg-pink-900 text-pink-300 border-pink-700",
      },
      icon: (
        <div className="p-2.5 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center shadow-sm">
          <StickyNote size={20} className="text-pink-500 dark:text-pink-300" />
        </div>
      ),
      about:
        "A Chrome extension that lets users create and save sticky notes on any webpage, all data persists even after logout. It leverages Chrome's local storage API for quick access and data persistence.",
      nextSteps:
        "I want to add cloud synchronization, collaborative editing features, and integration with productivity tools like Notion or Google Keep.",
      link: "https://github.com/sakets-dev/sticky-note-extension",
      tech: "HTML, CSS, JavaScript, Chrome APIs",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 transition-colors duration-[1000ms] ease-in-out">
      {/* HEADER */}
      <div
        className={`rounded-3xl w-full max-w-6xl text-center mb-10 p-8 border shadow-sm transition-colors duration-[1000ms] ease-in-out hover:shadow-md ${
          darkMode
            ? "bg-[#202023] border-[#2a2a2d] text-gray-100"
            : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800"
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
            onClick={() => setSelectedProject(p)}
            className={`cursor-pointer rounded-3xl p-6 border shadow-sm transition-transform duration-200 ease-in-out hover:scale-[1.05] hover:-translate-y-2 ${
              darkMode
                ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:border-blue-400/40"
                : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] hover:border-blue-500/40"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              {p.icon}
              <h2 className="text-lg font-semibold hover:text-blue-400 transition-colors duration-150">
                {p.title}
              </h2>
            </div>

            <p
              className={`text-sm mb-3 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {p.about.slice(0, 120)}...
            </p>

            {/* Tech Tags with matching colors */}
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.split(",").map((t, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-[3px] text-xs font-medium rounded-md border transition-all duration-200 hover:scale-[1.05] ${
                    darkMode ? p.color.dark : p.color.light
                  }`}
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Placeholder */}
        <div
          className={`rounded-3xl p-6 border border-dashed flex items-center justify-center text-center italic transition-colors duration-[1000ms] ease-in-out ${
            darkMode
              ? "bg-[#202023] border-[#2a2a2d] text-gray-400"
              : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-600"
          }`}
        >
          New projects are in the works...
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`rounded-3xl max-w-3xl w-full p-8 relative max-h-[90vh] overflow-y-auto transition-colors duration-[1000ms] ease-in-out ${
              darkMode ? "bg-[#202023] text-gray-100" : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              {selectedProject.icon}
              <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  About
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {selectedProject.about}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  Next Steps & Learning Goals
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {selectedProject.nextSteps}
                </p>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-medium shadow-md transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] text-white"
                  style={{
                    background: darkMode
                      ? "linear-gradient(135deg, #4a90e2, #357ABD)"
                      : "linear-gradient(135deg, #2563EB, #1E40AF)",
                  }}
                >
                  View on GitHub
                </a>
              </div>

              <div className="border-t pt-4">
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="font-bold">Built with:</span>{" "}
                  {selectedProject.tech}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t">
              <button
                onClick={() => setSelectedProject(null)}
                className={`w-full py-3 px-6 rounded-xl font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-gray-100"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
