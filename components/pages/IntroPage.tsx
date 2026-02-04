"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import React from "react";

interface IntroPageProps {
  onContinue: () => void;
}

import TeddyBear from "@/components/animations/TeddyBear";

const IntroPage: React.FC<IntroPageProps> = ({ onContinue }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #fffafa 0%, #fce4ec 100%)",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden surface-glow">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 text-4xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❤
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        variants={containerVariants}
      >
        {/* Animated Teddy Bear Entrance */}
        <motion.div className="mb-8" variants={itemVariants}>
          <TeddyBear variant="happy" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-serif text-6xl md:text-8xl font-bold bg-linear-to-b from-primary to-primary/70 bg-clip-text text-transparent mb-6 tracking-tight"
          variants={itemVariants}
        >
          A Special Moment
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-sans font-light"
          variants={itemVariants}
        >
          I have something I've been wanting to ask you. Something that means
          everything to me. Will you take a moment to hear me out?
        </motion.p>

        {/* Decorative Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <div className="h-px w-20 bg-linear-to-r from-transparent to-accent" />
          <div className="text-accent">✦</div>
          <div className="h-px w-20 bg-linear-to-l from-transparent to-accent" />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            onClick={onContinue}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-xl font-medium shadow-[0_10px_30px_rgba(196,30,58,0.3)] hover:shadow-[0_15px_40px_rgba(196,30,58,0.4)] transition-all duration-300 group"
          >
            Open My Heart
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-3 inline-block"
            >
              →
            </motion.span>
          </Button>

          <motion.p
            className="text-sm text-muted-foreground mt-8 uppercase tracking-widest font-medium opacity-60"
            variants={itemVariants}
          >
            A Message Just For You
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroPage;
