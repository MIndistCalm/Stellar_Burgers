import { FC } from "react";

import styles from "./styles.module.css";

export interface ModalOverlayProps {
  onClose?: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ onClose = () => {} }) => {
  return (
    <div
      className={styles["modal-overlay"]}
      onClick={() => {
        onClose();
      }}
    />
  );
};

export default ModalOverlay;
