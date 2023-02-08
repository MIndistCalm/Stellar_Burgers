import React from 'react'

import './styles.css'

interface ButtonProps {
	title: string | React.ReactNode
	children: React.ReactNode
	onClick?: () => void
}

export const NavButton = ({ title, children, onClick, ...props }: ButtonProps) => {
	return (
		<button
			className='items-centered custom-button pl-5 pr-5'
			onClick={onClick}
			{...props}
		>
			{children}
			<span className='pl-2 text-title'>{title}</span>
		</button>
	)
}
