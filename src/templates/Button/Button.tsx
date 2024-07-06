import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = 'primary',
}) => {
	const baseClasses =
		'px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
	const variantClasses = {
		primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
		secondary:
			'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
		outline:
			'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
	};

	return (
		<button
			className={`${baseClasses} ${variantClasses[variant]}`}
			onClick={onClick}>
			{children}
		</button>
	);
};
