import React from 'react'
import './App.css'
import { AppHeader } from './components/AppHeader/AppHeader'
import { BurgerConstructor } from './components/BurgerConstructor'
import { BurgerIngredients } from './components/BurgerIngredients/BurgerIngredients'
import data from './utils/data'

function App() {
	return (
		<div className='App'>
			<AppHeader />
			<section className='page-constructor'>
				<BurgerIngredients data={data} />
				<BurgerConstructor data={data} />
			</section>
		</div>
	)
}

export default App
