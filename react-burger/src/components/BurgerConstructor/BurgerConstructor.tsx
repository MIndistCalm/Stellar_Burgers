import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { Data } from "../../types";

import styles from "./styles.module.css";

interface DataProps {
  data: Data[];
}

export const BurgerConstructor = ({ data }: DataProps) => {
  return (
    <section className={`${styles.constructor_section} mt-15 ml-4 mr-4`}>
      <article className={`${styles.constructor_container}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data[0].image}
          extraClass="ml-8"
        />
        <div className={`${styles["constructor_drag_item"]}`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={data[2].image}
          />
        </div>
        <div className={`${styles["constructor_drag_item"]}`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={data[0].image}
          />
        </div>
        <div className={`${styles["constructor_drag_item"]}`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={data[0].image}
          />
        </div>
        <div className={`${styles["constructor_drag_item"]}`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={data[0].image}
          />
        </div>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={data[0].image}
          extraClass="ml-8"
        />
      </article>
      <footer className={`${styles["constructor_footer"]} mt-10`}>
        <span className={`${styles["price_block"]}`}>
          <span className="text text_type_digits-medium mr-2">1280</span>
          <CurrencyIcon type="primary" />
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass="ml-10"
        >
          Оформить заказ
        </Button>
      </footer>
    </section>
  );
};
