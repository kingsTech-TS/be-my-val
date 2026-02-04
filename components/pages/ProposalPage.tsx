"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface ProposalPageProps {
  onYes: () => void;
  onNo: () => void;
}

import TeddyBear from "@/components/animations/TeddyBear";

const ProposalPage: React.FC<ProposalPageProps> = ({ onYes, onNo }) => {
  const [noButtonState, setNoButtonState] = useState({
    scale: 1,
    x: 0,
    y: 0,
    text: "No 😅",
    clickCount: 0,
  });

  const [yesButtonScale, setYesButtonScale] = useState(1);

  const noTexts = [
    "Are you sure? 🥺",
    "Think again! 😌",
    "That hurts... 💔",
    "You don't mean that! 😭",
    "Wait, let me explain! 💕",
    "Just click Yes? 👉👈",
  ];

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const newClickCount = noButtonState.clickCount + 1;
    const newScale = Math.max(0.3, 1 - newClickCount * 0.15);

    // Wider range for more chaotic fun as they click "No"
    const randomX = (Math.random() - 0.5) * (200 + newClickCount * 20);
    const randomY = (Math.random() - 0.5) * (200 + newClickCount * 20);

    const newText = noTexts[Math.min(newClickCount, noTexts.length - 1)];
    const newYesScale = Math.min(2, 1 + newClickCount * 0.15);

    setNoButtonState({
      scale: newScale,
      x: randomX,
      y: randomY,
      text: newText,
      clickCount: newClickCount,
    });

    setYesButtonScale(newYesScale);
  };

  const textLines = [
    "Roses are red,",
    "violets are blue,",
    "will you make me the happiest man",
    "by being my Valentine?",
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #fffafa 0%, #fbd8e0 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div className="max-w-xl mx-auto w-full relative z-10">
        {/* The Invitation Card */}
        <motion.div
          className="glass-card rounded-4xl p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-white/60 relative overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Reactive Teddy Bear */}
          <div className="absolute -top-12 -right-8 w-32 h-32 md:w-40 md:h-40 opacity-80 pointer-events-none transform rotate-12">
            <TeddyBear variant="blushing" />
          </div>

          {/* Card Content */}
          <div className="text-center relative z-10">
            <motion.div
              className="mb-10 text-accent text-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❣
            </motion.div>

            <div className="space-y-6 mb-14">
              {textLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.2,
                    duration: 0.8,
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Separator */}
            <motion.div
              className="h-px w-24 bg-linear-to-r from-transparent via-accent/50 to-transparent mx-auto mb-14"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center min-h-[120px]">
              {/* Yes Button */}
              <motion.div
                animate={{ scale: yesButtonScale }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <Button
                  onClick={onYes}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-14 py-8 text-xl font-bold shadow-lg hover:shadow-2xl transition-all active:scale-95 gold-glow"
                >
                  YES! ❤️
                </Button>
              </motion.div>

              {/* No Button */}
              <motion.div
                animate={{
                  x: noButtonState.x,
                  y: noButtonState.y,
                  scale: noButtonState.scale,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute sm:relative"
              >
                <Button
                  onClick={handleNoClick}
                  variant="outline"
                  className="border-2 border-primary/30 text-primary/60 hover:bg-primary/5 rounded-full px-10 py-6 text-lg font-medium shadow-sm transition-all hover:text-black"
                >
                  {noButtonState.text}
                </Button>
              </motion.div>
            </div>

            {/* Helper text */}
            <motion.div
              className="mt-12 h-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: noButtonState.clickCount > 0 ? 1 : 0 }}
            >
              <p className="text-sm text-muted-foreground italic">
                {noButtonState.clickCount > 2
                  ? "Resistance is futile... scan for the big button! 😉"
                  : "Are you sure about that?"}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProposalPage;
