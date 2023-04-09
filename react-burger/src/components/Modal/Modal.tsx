import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./styles.module.css";
import ModalOverlay from "./ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose = () => {},
  children,
  title,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={`${styles["modal"]}`}>
        <div className={styles["modal_title_container"]}>
          <span className={"text text_type_main-large"}>{title}</span>
          <div className={styles["modal_close"]} onClick={() => onClose()}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={styles["modal_content"]}>{children}</div>
      </div>
    </ModalOverlay>,
    document.getElementById("modal-root")!
  );
};