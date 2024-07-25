"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NumberTickerProps { // IMPORTANT! : MAKE SURE YOU ADD AND SET THIS VALUE IN YOUR PAGE, FOR EXAMPLE: <Numberticker maxNumber={4}/> . IF NOT IT WONT WORK.
  maxNumber: number;
}

const NumberTicker: React.FC<NumberTickerProps> = ({ maxNumber }) => {
  const [number, setNumber] = useState(0);
  const [intervalTime, setIntervalTime] = useState(200); // Start with a slower interval

  useEffect(() => {
    if (number >= maxNumber) return;

    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        const newNumber = prevNumber + 1;
        if (newNumber >= maxNumber) {
          clearInterval(interval);
        }
        return newNumber;
      });
    }, intervalTime);

    // Adjust interval time to create a smoother speed effect
    if (number < maxNumber / 4) {
      setIntervalTime((prevInterval) => Math.max(prevInterval - 10, 30)); // Speed up gradually
    } else if (number < maxNumber - 5) {
      setIntervalTime((prevInterval) => Math.max(prevInterval - 5, 30)); // Continue speeding up
    } else {
      setIntervalTime((prevInterval) => Math.min(prevInterval + 20, 150)); // Slow down gradually
    }

    return () => clearInterval(interval);
  }, [number, maxNumber, intervalTime]);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        key={number}
        transition={{ duration: 0.2 }}
        className="text-6xl font-bold text-white"
      >
        {number}
      </motion.div>
    </div>
  );
};

export default NumberTicker;
