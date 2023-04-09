import { FC } from "react";

import styles from "./styles.module.css";

export interface ModalOverlayProps {
  onClose?: () => void;
  children?: React.ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = ({
  children,
  onClose = () => {},
}) => {
  return (
    <div
      className={styles["modal-overlay"]}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
