"use client";
import { useState } from "react";

export default function PostContent({ content }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };


  return (
    <div className="space-y-4 text-base leading-relaxed p-2">
      {content
        .slice(0, expanded ? content.length : 1)
        .map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      {content.length > 1 && (
        <button
          onClick={toggleExpanded}
          className="text-blue-500 hover:text-blue-700"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  )
}
