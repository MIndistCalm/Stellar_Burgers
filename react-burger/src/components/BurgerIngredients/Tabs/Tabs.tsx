import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { Dispatch, SetStateAction } from 'react'

interface TabsProps {
	current: string
	setCurrent: Dispatch<SetStateAction<string>>
}

export const Tabs = ({ current, setCurrent }: TabsProps) => {
	return (
		<div style={{ display: 'flex' }}>
			<Tab
				value='one'
				active={current === 'one'}
				onClick={setCurrent}
			>
				Булки
			</Tab>
			<Tab
				value='two'
				active={current === 'two'}
				onClick={setCurrent}
			>
				Соусы
			</Tab>
			<Tab
				value='three'
				active={current === 'three'}
				onClick={setCurrent}
			>
				Начинки
			</Tab>
		</div>
	)
}
