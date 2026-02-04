"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Fireworks from "@/components/animations/Fireworks";
import FloatingHearts from "@/components/animations/FloatingHearts";
import FloatingBalloons from "@/components/animations/FloatingBalloons";
import TeddyBear from "@/components/animations/TeddyBear";
import React from "react";

interface CelebrationPageProps {
  onReplay: () => void;
}

const CelebrationPage: React.FC<CelebrationPageProps> = ({ onReplay }) => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #fffafa 0%, #fce4ec 40%, #ffd700/10 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animation layers */}
      <Fireworks />
      <FloatingHearts count={40} />
      <FloatingBalloons count={25} />

      {/* Main content */}
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-20 px-4 sm:px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Celebration header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <motion.h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-b from-primary via-primary to-accent bg-clip-text text-transparent mb-6 py-2 leading-tight">
            I Knew You'd Say Yes!
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide uppercase">
            You just made me the happiest person alive
          </p>
        </motion.div>

        {/* Centerpiece Teddy Bears */}
        <div className="flex justify-center items-end gap-8 sm:gap-12 md:gap-24 mb-12 md:mb-16 flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-700" />
              <div className="scale-75 sm:scale-100">
                <TeddyBear variant="happy" />
              </div>
              <p className="mt-4 text-primary font-serif italic text-base sm:text-lg opacity-80">
                Jumping for Joy!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 1.2,
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
              <div className="scale-75 sm:scale-100">
                <TeddyBear variant="blushing" />
              </div>
              <p className="mt-4 text-accent font-serif italic text-base sm:text-lg opacity-80">
                So Happy I'm Blushing...
              </p>
            </div>
          </motion.div>
        </div>

        {/* Celebration text card */}
        <motion.div
          className="glass-card max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 mb-10 md:mb-12 shadow-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-foreground mb-6 leading-relaxed">
            {
              "I can't wait to spend every moment of Valentine's Day with you. You are my everything."
            }
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 text-4xl sm:text-5xl">
            {["❤️", "💖", "✨"].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  filter: [
                    "drop-shadow(0 0 0px rgba(196,30,58,0))",
                    "drop-shadow(0 0 10px rgba(196,30,58,0.5))",
                    "drop-shadow(0 0 0px rgba(196,30,58,0))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Replay button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5,
            duration: 1,
          }}
        >
          <Button
            onClick={onReplay}
            size="lg"
            className="bg-transparent hover:bg-primary/5 text-primary border-2 border-primary/20 rounded-full px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-medium transition-all duration-300 active:scale-95"
          >
            Relive the Magic ✨
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CelebrationPage;
