"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const labels = ["POSITION", "RESEARCH", "TEST", "CREATE", "DEFINE", "DELIVER"];

export default function HexagonScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade overlay
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // HEXAGON BORDER LENGTH
  const strokeLength = 1220; // perfect for your hexagon

  // DRAWING EFFECT (border fill)
  const strokeOffset = useTransform(scrollYProgress, [0, 1], [strokeLength, 0]);

  // COLOR FADE-IN
  const strokeColorOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  // Small center circle animation
  const circleScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const circleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const activeLabel = useTransform(scrollYProgress, (v) =>
    Math.floor(v * 6)
  );

  return (
    <div
      ref={ref}
      className="relative w-full md:w-1/2 flex items-center justify-center p-10 bg-black"
      style={{ height: "100vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/your-image.jpg"
          alt="bg"
          className="object-cover w-full h-full"
        />

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Hexagon border drawing animation */}
      <motion.svg
        width="350"
        height="350"
        viewBox="0 0 173 200"
        className="relative"
      >
        <motion.path
          d="M86.5 5 L167 52.5 V147.5 L86.5 195 L6 147.5 V52.5 Z"
          stroke="#f1c800"
          strokeWidth={4}
          fill="none"
          strokeDasharray={strokeLength}
          style={{
            strokeDashoffset: strokeOffset,
            opacity: strokeColorOpacity, // smooth yellow fade
          }}
        />
      </motion.svg>

      {/* Small yellow center circle */}
      <motion.div
        className="absolute"
        style={{
          scale: circleScale,
          opacity: circleOpacity,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-[#f1c800]" />
      </motion.div>

      {/* Text label */}
      <motion.p
        className="absolute bottom-14 right-14 text-[#f1c800] text-xl tracking-wider rotate-150"
      >
        {labels[Math.max(0, Math.min(5, Math.round(activeLabel.get())))]}
      </motion.p>
    </div>
  );
}
