"use client"; // Dont delete or it wont work

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = [
  { 
    id: 0, 
    title: 'Nature', 
    paragraph: 'A beautiful, quiet place. Where wildlife roams and ecolife grows. The root of our existance.', 
    bgColor: 'bg-neutral-950', 
    bgImage: 'url("https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?b=1&s=612x612&w=0&k=20&c=81f5HaMtoPNUrdfa4hnS8NcwEgD9tH2nnTUBu25Msug=")' 
  },
  { 
    id: 1, 
    title: 'Paris', 
    paragraph: 'A beautiful city of france, located in the center of the country. Experience fancy designs combined with a touch of elegance.', 
    bgColor: 'bg-neutral-950', 
    bgImage: 'url("https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg")' 
  },
  { 
    id: 2, 
    title: 'Gothenburg', 
    paragraph: 'The second biggest city in Sweden, Gothenburg. Located on the west coast, or the so called; "best coast".', 
    bgColor: 'bg-neutral-950', 
    bgImage: 'url("https://gte-gcms.imgix.net/resize=width%3A2048,fit%3Amax/3bnV2WJqR9mPW2rYHKLy?ar=1.91%3A1&w=1200&fit=crop")' 
  },
  // Add more card data here
];

const FocusCard: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`h-48 w-80 relative overflow-hidden shadow-lg rounded-lg border-t-1 border-neutral-800 transition ${hoveredCard !== null && hoveredCard !== card.id ? 'blur-sm' : ''} ${card.bgColor}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
          >
            <div 
              className="absolute inset-0 opacity-50"
              style={{ backgroundImage: card.bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="place-content-center justify-center flex relative z-10 p-4 h-full">
              <AnimatePresence mode='wait'>
                {hoveredCard === card.id ? (
                  <motion.p
                    key="paragraph"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" text-center self-center text-sm text-white"
                  >
                    {card.paragraph}
                  </motion.p>
                ) : (
                  <motion.h1
                    key="title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg text-center self-center text-white"
                  >
                    {card.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FocusCard;
