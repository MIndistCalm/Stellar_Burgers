import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { Data } from "../../types";

import styles from "./styles.module.css";
import { Modal } from "../Modal";
import Check from "../../images/Check/Check";

interface DataProps {
  data: Data[];
}

export const BurgerConstructor = ({ data }: DataProps) => {
  const [showModal, setShowModal] = useState(false);

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
        <div className={`${styles["non_fixed_block"]} pr-2`}>
          {data.map((item) => {
            return (
              item.type !== "bun" && (
                <div
                  key={item._id}
                  className={`${styles["constructor_drag_item"]}`}
                >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={50}
                    thumbnail={item.image}
                  />
                </div>
              )
            );
          })}
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
          onClick={() => setShowModal(true)}
        >
          Оформить заказ
        </Button>
      </footer>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={""}>
        <div className={[styles["popup"]].join(" ")}>
          <p
            className={[
              styles["popup_text_glow"],
              "text text_type_digits-large pb-8",
            ].join(" ")}
          >
            034536
          </p>
          <p
            className={[styles[""], "text text_type_main-medium pb-15"].join(
              " "
            )}
          >
            идентификатор заказа
          </p>
          <Check className="pb-15" />
          <p
            className={[styles[""], "text text_type_main-default pb-2"].join(
              " "
            )}
          >
            Ваш заказ начали готовить
          </p>
          <p
            className={[
              styles["popup_text_gray"],
              "text text_type_main-default pb-20",
            ].join(" ")}
          >
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </Modal>
    </section>
  );
};
