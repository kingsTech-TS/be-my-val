"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface TeddyBearProps {
  variant?: "happy" | "blushing";
}

const TeddyBear: React.FC<TeddyBearProps> = ({ variant = "happy" }) => {
  if (variant === "happy") {
    return (
      <motion.div
        className="relative w-48 h-48 mx-auto"
        initial={{ y: 0, scaleY: 1 }}
        animate={{
          y: [0, -60, 0],
          scaleY: [1, 0.9, 1.1, 1], // Squash and stretch
          scaleX: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8],
        }}
      >
        <Image
          src="/teddy-bear.jpg"
          alt="Jumping teddy bear"
          fill
          className="object-contain drop-shadow-2xl"
        />
        {/* Shadow that shrinks as bear jumps */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/10 rounded-full blur-md"
          animate={{
            scale: [1, 0.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  }

  // Blushing variant
  return (
    <motion.div
      className="relative w-48 h-48 mx-auto"
      animate={{
        rotateZ: [-1, 1, -1],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/teddy-bear.jpg"
        alt="Blushing teddy bear"
        fill
        className="object-contain drop-shadow-xl"
      />
      {/* Soft Blush circles */}
      <motion.div
        className="absolute top-[35%] left-[22%] w-12 h-8 bg-pink-400/30 rounded-[50%] blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-[35%] right-[22%] w-12 h-8 bg-pink-400/30 rounded-[50%] blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      {/* Floating small hearts around blushing bear */}
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-500 text-lg pointer-events-none"
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -60],
            x: [i * 20 - 20, i * 20 - 20 + (Math.random() * 10 - 5)],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
          style={{
            top: "20%",
            left: "45%",
          }}
        >
          ❤
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TeddyBear;
