"use client";
import { useEffect, useState } from "react";
import "./hexagon.css";

export default function HexagonScroll() {
  const [progress, setProgress] = useState(0);
  const [angle, setAngle] = useState(0);

  // 6 Labels (one for each border)
  const labels = [
    "IMAGINE",
    "EXPLORE",
    "NAVIGATE",
    "ANALYZE",
    "ADAPT",
    "POSITION",
  ];

  // Determine active border text
  const activeLabel = labels[Math.floor((angle % 360) / 60)];

  useEffect(() => {
    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = window.scrollY / max;

      setProgress(p);
      setAngle(p * 360);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="relative w-[500px] h-[500px]">
        {/* ALWAYS VISIBLE HEXAGON BORDER */}
        <svg className="absolute inset-0" viewBox="0 0 200 200">
          <polygon
            points="100,10 186,55 186,145 100,190 14,145 14,55"
            className="hex-default"
          />
        </svg>

        {/* SCROLL-ACTIVATED OUTLINE */}
        <svg className="absolute inset-0" viewBox="0 0 200 200">
          <polygon
            points="100,10 186,55 186,145 100,190 14,145 14,55"
            className="hex-anim"
            style={{
              strokeDasharray: 600,
              strokeDashoffset: 600 - progress * 600,
            }}
          />
        </svg>

        {/* TRIANGLE CLIPPED INSIDE HEXAGON */}
        <div className="triangle-clip">
          <div
            className="triangle-rotator"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="triangle"></div>
          </div>
        </div>

        {/* CENTER DOT */}
        <div className="center-dot"></div>

        {/* 6 TEXTS AROUND THE HEXAGON */}
        {labels.map((text, i) => (
          <div
            key={i}
            className={`hex-text hex-text-${i} ${
              activeLabel === text ? "active" : ""
            }`}
            style={{ transform: `rotate(${i * 60}deg)` }}
          >
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
