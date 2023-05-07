import React, { useState } from "react";
import { CardIngridient } from "./components/CardIngridient";
import { Tabs } from "./components/Tabs";
import { Data } from "../../types";

import styles from "./styles.module.css";
import { TabsEnum } from "../../enums/enums";

interface DataProps {
  data: Data[];
}

export const BurgerIngredients = ({ data }: DataProps) => {
  const [current, setCurrent] = useState(TabsEnum.BUN.toString());

  const renderCategory = (title: string, type: string) => {
    const categoryData = data.filter((item) => item.type === type);
    if (categoryData.length === 0) {
      return null;
    }
    return (
      <div key={type}>
        <h2 className="text text_type_main-medium mb-6">{title}</h2>
        <section className={`${styles.categories_section} pr-4 pl-4 pb-10`}>
          {categoryData.map((item) => (
            <CardIngridient key={item._id} ingridient={item} />
          ))}
        </section>
      </div>
    );
  };

  return (
    <section className={`${styles.ingredients_section}`}>
      <header className="mb-10">
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <Tabs current={current} setCurrent={setCurrent} />
      </header>
      <article className={`${styles.categories_container}`}>
        {renderCategory("Булки", "bun")}
        {renderCategory("Соусы", "sauce")}
        {renderCategory("Начинки", "main")}
      </article>
    </section>
  );
};
