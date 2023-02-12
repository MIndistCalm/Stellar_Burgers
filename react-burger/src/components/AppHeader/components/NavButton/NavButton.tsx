import React from 'react'

import styles from './styles.module.css'

interface ButtonProps {
	title: string | React.ReactNode
	children: React.ReactNode
	onClick?: () => void
}

export const NavButton = ({ title, children, onClick}: ButtonProps) => {
	return (
		<button
			className={`${styles.items_centered} ${styles.custom_button} pl-5 pr-5`}
			onClick={onClick}
		>
			{children}
			<span className={`pl-2 ${styles.text_title}`}>{title}</span>
		</button>
	)
}
