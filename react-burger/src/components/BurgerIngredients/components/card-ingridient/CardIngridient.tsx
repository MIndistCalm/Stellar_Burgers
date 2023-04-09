import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { Data } from "../../../../types";

import styles from "./styles.module.css";
import { Modal } from "../../../Modal";

interface IngridientProps {
  ingridient: Data;
}

export const CardIngridient = ({ ingridient }: IngridientProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section
        className={`${styles.card} pb-8`}
        onClick={() => setShowModal(true)}
      >
        <div className="pl-4 pr-4">
          <img src={ingridient.image} alt={ingridient.name} />
        </div>
        <span className="items_centered mt-1 mb-1">
          <span className="text text_type_main-medium">{ingridient.price}</span>
          <CurrencyIcon type="primary" />
        </span>
        <span className={`${styles.text_centered} text text_type_main-default`}>
          {ingridient.name}
        </span>
      </section>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={"Детали ингредиента"}
      >
        <div className={[styles["popup"]].join(" ")}>
          <img src={ingridient.image_large} alt={ingridient.name} />
          <p
            className={[
              styles[""],
              "text text_type_main-medium pb-8 pt-4",
            ].join(" ")}
          >
            {ingridient.name}
          </p>
          <div className={[styles["popup_info"]].join(" ")}>
            <div className={[styles["popup_info_item"]].join(" ")}>
              <span className="text text_type_main-default">Калории, ккал</span>
              <span className="text text_type_digits-default">
                {ingridient.calories}
              </span>
            </div>
            <div className={[styles["popup_info_item"]].join(" ")}>
              <span className="text text_type_main-default">Белки, г</span>
              <span className="text text_type_digits-default">
                {ingridient.proteins}
              </span>
            </div>
            <div className={[styles["popup_info_item"]].join(" ")}>
              <span className="text text_type_main-default">Жиры, г</span>
              <span className="text text_type_digits-default">
                {ingridient.fat}
              </span>
            </div>
            <div className={[styles["popup_info_item"]].join(" ")}>
              <span className="text text_type_main-default">Углеводы, г</span>
              <span className="text text_type_digits-default">
                {ingridient.carbohydrates}
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
