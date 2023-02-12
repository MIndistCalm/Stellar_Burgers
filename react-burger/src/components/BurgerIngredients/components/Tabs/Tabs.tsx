import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { Dispatch, SetStateAction } from 'react'
import { TabsEnum } from '../../../../enums/enums'

interface TabsProps {
	current: string
	setCurrent: Dispatch<SetStateAction<string>>
}

export const Tabs = ({ current, setCurrent }: TabsProps) => {
	return (
		<div style={{ display: 'flex' }}>
			<Tab
				value={TabsEnum.BUN.toString()}
				active={current === TabsEnum.BUN.toString()}
				onClick={setCurrent}
			>
				Булки
			</Tab>
			<Tab
				value={TabsEnum.SAUCE.toString()}
				active={current === TabsEnum.SAUCE.toString()}
				onClick={setCurrent}
			>
				Соусы
			</Tab>
			<Tab
				value={TabsEnum.FILLINGS.toString()}
				active={current === TabsEnum.FILLINGS.toString()}
				onClick={setCurrent}
			>
				Начинки
			</Tab>
		</div>
	)
}
