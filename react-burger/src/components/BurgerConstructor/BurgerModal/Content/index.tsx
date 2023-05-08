import { FC } from "react";
import { Check } from "../../../../images";

import styles from "./styles.module.css";
export interface ContentProps {
  readonly className?: string;
}

const Content: FC<ContentProps> = ({ className }) => {
  return (
    <div className={styles.popup}>
      <p
        className={[
          styles["popup_text_glow"],
          "text text_type_digits-large pb-8",
        ].join(" ")}
      >
        034536
      </p>
      <p className={"text text_type_main-medium pb-15"}>идентификатор заказа</p>
      <Check className="pb-15" />
      <p className={"text text_type_main-default pb-2"}>
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
  );
};

export default Content;
