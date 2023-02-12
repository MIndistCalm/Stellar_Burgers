import React from 'react'
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'

import styles from './styles.module.css'
import { NavButton } from '../components'

export const Nav = () => {
  return (
    <nav className={`${styles.nav_container}`} >
      <NavButton title='Конструктор' >
        <BurgerIcon type='secondary'/>
      </NavButton>
      <NavButton title='Лента заказов'>
        <ListIcon type="secondary" />
      </NavButton>
    </nav>
  )
}