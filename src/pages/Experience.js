import React from "react";

export default function Experience({ darkMode }) {
  const images = [
    `${process.env.PUBLIC_URL}/research/one.png`,
    `${process.env.PUBLIC_URL}/research/two.png`,
    `${process.env.PUBLIC_URL}/research/three.png`,
    `${process.env.PUBLIC_URL}/research/four.png`,
    `${process.env.PUBLIC_URL}/research/five.png`,
    `${process.env.PUBLIC_URL}/research/six.png`,
    `${process.env.PUBLIC_URL}/research/seven.png`,
  ];

  const containerGlow =
    "transition-colors duration-[1000ms] ease-in-out hover:transition-shadow hover:duration-[200ms]";

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 transition-all duration-[1000ms] ease-in-out">
      {/* MAIN CONTAINER */}
      <div
        className={`rounded-3xl w-full max-w-6xl mb-10 p-10 border shadow-sm ${containerGlow} ${
          darkMode
            ? "bg-[#202023] border-[#2a2a2d] text-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            : "bg-[#f1f2f4] border-[#d8d8d8] text-gray-800 hover:shadow-[0_0_50px_rgba(0,0,0,0.25)]"
        }`}
      >
        {/* HEADER */}
        <div className="px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left">
            Experience
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
            {/* LEFT SIDE — TEXT */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-6 px-6">
              <p
                className={`leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                My research journey has taken me through some of the most exciting
                intersections of computer science and complexity theory. From
                studying emergent behavior with the{" "}
                <b>Complexity & Organized Behaviour (COBWEB)</b> group at the
                University of Toronto, to exploring{" "}
                <b>quantum computing</b> applications at the University of
                Waterloo, I’ve learned how theoretical insights can drive
                real-world innovation.
              </p>

              <p
                className={`leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                My work primarily focuses on systems thinking, network dynamics,
                and algorithmic efficiency — blending data, mathematics, and
                creativity to uncover meaningful patterns in complex structures.
              </p>

              {/* HIGHLIGHTS BOX */}
              <div
                className={`p-5 rounded-2xl mt-4 border transition-colors duration-[1000ms] ease-in-out ${
                  darkMode
                    ? "bg-[#26262a] border-[#2a2a2d] text-gray-100"
                    : "bg-[#e6e7e9] border-[#d8d8d8] text-gray-800"
                }`}
              >
                <h2 className="font-semibold text-lg mb-2">Key Highlights</h2>
                <ul
                  className={`list-disc ml-5 space-y-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <li>Complexity & Organized Behaviour (COBWEB), UofT</li>
                  <li>Quantum Computing Researcher, (QSYS) University of Waterloo</li>
                  <li>AI-driven systems modeling & data pattern discovery</li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE — SCROLLABLE IMAGE GALLERY */}
            <div className="md:w-1/2 flex justify-center items-start md:items-start pr-6">
              <div
                className={`w-[400px] h-[600px] overflow-y-scroll rounded-3xl border shadow-sm mt-[-75px] transition-colors duration-[1000ms] ease-in-out ${
                  darkMode
                    ? "bg-[#26262a] border-[#2a2a2d]"
                    : "bg-[#e6e7e9] border-[#d8d8d8]"
                }`}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style>
                  {`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                </style>

                <div className="flex flex-col gap-6 pt-6 pb-6 px-4">
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`research-${index + 1}`}
                      className="w-full rounded-2xl object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
