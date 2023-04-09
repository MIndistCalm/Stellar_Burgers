import React, { useState } from "react";
import { CardIngridient } from "./components/card-ingridient";
import { Tabs } from "./components/Tabs";
import { Data } from "../../types";

import styles from "./styles.module.css";
import { TabsEnum } from "../../enums/enums";

interface DataProps {
  data: Data[];
}

export const BurgerIngredients = ({ data }: DataProps) => {
  const [current, setCurrent] = useState(TabsEnum.BUN.toString());

  return (
    <section className={`${styles.ingredients_section}`}>
      <header className="mb-10">
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <Tabs current={current} setCurrent={setCurrent} />
      </header>
      <article className={`${styles.categories_container}`}>
        <div>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <section className={`${styles.categories_section} pr-4 pl-4 pb-10`}>
            {data &&
              data.map((item) => {
                return (
                  item.type === "bun" && (
                    <CardIngridient key={item._id} ingridient={item} />
                  )
                );
              })}
          </section>
        </div>
        <div>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <section className={`${styles.categories_section} pr-4 pl-4 pb-10`}>
            {data &&
              data.map((item) => {
                return (
                  item.type === "sauce" && (
                    <CardIngridient key={item._id} ingridient={item} />
                  )
                );
              })}
          </section>
        </div>
        <div>
          <h2 className="text text_type_main-medium mb-6">Начинки</h2>
          <section className={`${styles.categories_section} pr-4 pl-4 pb-10`}>
            {data &&
              data.map((item) => {
                return (
                  item.type === "main" && (
                    <CardIngridient key={item._id} ingridient={item} />
                  )
                );
              })}
          </section>
        </div>
      </article>
    </section>
  );
};
