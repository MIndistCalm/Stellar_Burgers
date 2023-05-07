import { FC } from "react";
import { Modal } from "../../Modal";
import Content from "./Content";

export interface BurgerModalProps {
  readonly onClose: (value: boolean) => void;
}

const BurgerModal: FC<BurgerModalProps> = ({ onClose = () => {} }) => {
  return (
    <Modal onClose={() => onClose(false)} title={""}>
      <Content />
    </Modal>
  );
};

export default BurgerModal;
