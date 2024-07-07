import React, { useState, useEffect } from 'react';

const words = ["perfect", "good", "great", "awesome"];

const FlipWords: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 4 seconds to match the animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="mt-4 mb-4">
      Create <span className="fade-up inline-block">{words[currentWordIndex]}</span> <br /> websites with <span className="font-semibold">Eternity UI</span>.
    </h1>
  );
};

export default FlipWords;
