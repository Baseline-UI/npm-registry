import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultWords = ['Modern', 'Great', 'Cool', 'Hot'];
const defaultDuration = 3000;

const FlippingWords: React.FC<{ words?: string[]; duration?: number }> = ({
	words = defaultWords,
	duration = defaultDuration,
}) => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration); // Change word every (duration) seconds

		return () => clearInterval(interval);
	}, []);

	const word = words[currentWordIndex];

	const letterVariants = {
		initial: {
			opacity: 0,
			y: 10,
			filter: 'blur(3px)',
		},
		animate: (i: number) => ({
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				delay: i * 0.05, // Faster ripple effect
				duration: 0.4, // Faster duration
				ease: 'easeOut',
			},
		}),
		exit: {
			opacity: 0,
			y: -10,
			filter: 'blur(3px)',
			transition: {
				duration: 0.4,
				ease: 'easeIn',
			},
		},
	};

	return (
		<h1 className='mt-4 mb-4 text-2xl'>
			Build{' '}
			<AnimatePresence mode='wait'>
				<motion.span
					key={currentWordIndex}
					className='inline-block font-semibold'
					initial='initial'
					animate='animate'
					exit='exit'>
					{word.split('').map((letter, index) => (
						<motion.span
							key={index}
							custom={index}
							variants={letterVariants}
							className='inline-block'>
							{letter}
						</motion.span>
					))}
				</motion.span>
			</AnimatePresence>{' '}
			<br /> websites with <span className='font-semibold'>BaselineUI</span>
		</h1>
	);
};

export default FlippingWords;
