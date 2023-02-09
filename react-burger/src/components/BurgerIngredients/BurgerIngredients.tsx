import React, { useState } from 'react'
import { CardIngridient } from './CardIngridient'
import { Tabs } from './Tabs'
import { Data } from '../../types'

import './styles.css'

interface DataProps {
	data: Data[]
}

export const BurgerIngredients = ({ data }: DataProps) => {
	const [current, setCurrent] = useState('one')
	return (
		<section className='ingredients-section'>
			<header className='mb-10'>
				<h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
				<Tabs
					current={current}
					setCurrent={setCurrent}
				/>
			</header>
			<article className='categories-container'>
				<div>
					<h2 className='text text_type_main-medium mb-6'>Булки</h2>
					<section className='categories-section pr-4 pl-4 pb-10'>
						{data &&
							data.map((item) => {
								return item.type === 'bun' && <CardIngridient ingridient={item} />
							})}
					</section>
				</div>
				<div>
					<h2 className='text text_type_main-medium mb-6'>Соусы</h2>
					<section className='categories-section pr-4 pl-4 pb-10'>
						{data &&
							data.map((item) => {
								return item.type === 'sauce' && <CardIngridient ingridient={item} />
							})}
					</section>
				</div>
				<div>
					<h2 className='text text_type_main-medium mb-6'>Начинки</h2>
					<section className='categories-section pr-4 pl-4 pb-10'>
						{data &&
							data.map((item) => {
								return item.type === 'main' && <CardIngridient ingridient={item} />
							})}
					</section>
				</div>
			</article>
		</section>
	)
}
