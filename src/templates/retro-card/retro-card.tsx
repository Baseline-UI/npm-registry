import React from 'react';
import { motion } from 'framer-motion';


const RetroCard: React.FC = () => {
  return (
    <div className="h-48 w-80 bg-gradient-to-t from-neutral-950 to-neutral-900 relative overflow-hidden shadow-lg rounded-lg">
      {/* Top Gradient Shadow */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-neutral-900 to-transparent"></div>
      
      {/* Bottom Gradient Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-neutral-950 to-transparent"></div>

      <motion.div
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_48px]"
        animate={{ backgroundPositionY: ['0%', '100%'] }}
        transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
        style={{ transform: 'perspective(250px) rotateX(45deg)' }}
      ></motion.div>

      <div className="text-center">
        <h1 className="mt-16 text-medium text-white">
          Baseline UI <br />
          Retro Card
        </h1>
      </div>
    </div>
  );
};

export default RetroCard;