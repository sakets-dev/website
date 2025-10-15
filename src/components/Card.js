import React from "react";

export default function Card({ title, image, small }) {
  return (
    <div
      className={`rounded-2xl shadow-soft card p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        small ? "h-40" : ""
      }`}
    >
      {image ? (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-3 text-sm text-gray-700 font-medium">
            {title}
          </div>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center text-gray-500">
          No preview
        </div>
      )}
    </div>
  );
}
