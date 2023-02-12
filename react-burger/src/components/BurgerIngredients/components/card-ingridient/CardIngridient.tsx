import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { Data } from '../../../../types'

import styles from './styles.module.css'

interface IngridientProps {
	ingridient: Data
}

export const CardIngridient = ({ ingridient }: IngridientProps) => {
	return (
		<section className={`${styles.card} pb-8`}>
			<div className='pl-4 pr-4'>
				<img
					src={ingridient.image}
					alt={ingridient.name}
				/>
			</div>
			<span className='items_centered mt-1 mb-1'>
				<span className='text text_type_main-medium'>{ingridient.price}</span>
				<CurrencyIcon type='primary' />
			</span>
			<span className={`${styles.text_centered} text text_type_main-default`}>{ingridient.name}</span>
		</section>
	)
}
