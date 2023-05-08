import React from "react";
import { Nav } from "./Nav";

import styles from "./styles.module.css";
import { NavButton } from "./components/NavButton";
import {
  BurgerIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
  return (
    <header className={`${styles.header_container} mb-10`}>
      <Nav />
      <Logo />
      <NavButton title="Личный аккаунт">
        <BurgerIcon type="secondary" />
      </NavButton>
    </header>
  );
};
