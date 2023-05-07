import { FC } from "react";
import { Data } from "../../../../../../types";

import styles from "./styles.module.css";

export interface ContentProps {
  readonly ingridient: Data;
}

const Content: FC<ContentProps> = ({ ingridient }) => {
  return (
    <div className={styles.popup}>
      <img src={ingridient.image_large} alt={ingridient.name} />
      <p className={"text text_type_main-medium pb-8 pt-4"}>
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
  );
};

export default Content;
