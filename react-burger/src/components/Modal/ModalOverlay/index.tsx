import { FC } from "react";

import styles from "./styles.module.css";

export interface ModalOverlayProps {
  children?: React.ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  return <div className={styles["modal-overlay"]}>{children}</div>;
};

export default ModalOverlay;
