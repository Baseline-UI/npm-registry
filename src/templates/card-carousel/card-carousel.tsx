import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const cardContent = [
  {
    title: 'Card 1 Title',
    body: 'This is the content for card 1.',
    footer: 'Footer for card 1',
  },
  {
    title: 'Card 2 Title',
    body: 'This is the content for card 2.',
    footer: 'Footer for card 2',
  },
  {
    title: 'Card 3 Title',
    body: 'This is the content for card 3.',
    footer: 'Footer for card 3',
  },
  {
    title: 'Card 4 Title',
    body: 'This is the content for card 3.',
    footer: 'Footer for card 3',
  },
  {
    title: 'Card 5 Title',
    body: 'This is the content for card 5.',
    footer: 'Footer for card 5',
  },
  {
    title: 'Card 6 Title',
    body: 'This is the content for card 6.',
    footer: 'Footer for card 6',
  },
  {
    title: 'Card 7 Title',
    body: 'This is the content for card 7.',
    footer: 'Footer for card 7',
  },
  {
    title: 'Card 8 Title',
    body: 'This is the content for card 8.',
    footer: 'Footer for card 8',
  },
  {
    title: 'Card 9 Title',
    body: 'This is the content for card 9.',
    footer: 'Footer for card 9',
  },
  // Add more card content objects as needed
];

const CardCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden relative w-full max-w-4xl">
        <motion.div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-scroll snap-x snap-mandatory no-scrollbar scrollbar scrollbar-hide"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
        >
          {cardContent.map((content, index) => (
            <div
              key={index}
              className="min-w-[300px] snap-start rounded-xl shadow-lg bg-gradient-to-b from-black to-neutral-950 backdrop-blur-lg flex flex-col"
            >
              <div className="p-4 border-b border-gray-700">
                <h1 className="font-medium text-xl text-white">{content.title}</h1>
              </div>
              <div className="p-4 flex-1 text-medium font-normal text-white">
                <p>{content.body}</p>
              </div>
              <div className="p-4 border-t border-gray-700 text-sm font-normal text-white">
                {content.footer}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex mt-4 space-x-4">
      <button className="rounded-full bg-black px-2 py-2" onClick={scrollLeft}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </span>
        </button>
        <button className="rounded-full bg-black px-2 py-2" onClick={scrollRight}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
