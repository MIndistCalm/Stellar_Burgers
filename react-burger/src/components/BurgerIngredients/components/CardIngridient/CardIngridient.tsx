import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { Data } from "../../../../types";

import styles from "./styles.module.css";
import { Modal } from "../../../Modal";
import CardIngridientModal from "./CardIngridientModal";

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
      {showModal ? (
        <CardIngridientModal
          ingridient={ingridient}
          onClose={(value) => setShowModal(value)}
        />
      ) : null}
    </>
  );
};
