"use client";
import { useEffect, useState } from "react";
import "./hexagon.css";

export default function HexagonScroll() {
  const [progress, setProgress] = useState(0);
  const [angle, setAngle] = useState(0);

  const labels = ["IMAGINE", "NAVIGATE", "POSITION"];
  const activeLabel = labels[Math.floor((angle % 360) / 120)];

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
        {/* DEFAULT ALWAYS-VISIBLE HEXAGON */}
        <svg className="absolute inset-0" viewBox="0 0 200 200">
          <polygon
            points="100,10 186,55 186,145 100,190 14,145 14,55"
            className="hex-default"
          />
        </svg>

        {/* SCROLL-ACTIVATED ANIMATED HIGHLIGHT */}
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

        {/* Rotating Triangle */}
        <div
          className="triangle-rotator"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="triangle"></div>
        </div>

        {/* Center Dot */}
        <div className="center-dot"></div>

        {/* Side Text */}
        <div className="side-text">{activeLabel}</div>
      </div>
    </div>
  );
}
