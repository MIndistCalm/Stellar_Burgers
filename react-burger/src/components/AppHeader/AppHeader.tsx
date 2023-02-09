import React from 'react'
import { Nav } from './Nav'

import './styles.css'
import { NavButton } from './components/NavButton'
import { BurgerIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'

export const AppHeader = () => {
	return (
		<header className='header-container m-10'>
			<div style={{ display: 'flex', gap: '5.5vw' }}>
				<Nav />
				<Logo />
			</div>

			<NavButton title='Личный аккаунт'>
				<BurgerIcon type='secondary' />
			</NavButton>
		</header>
	)
}
