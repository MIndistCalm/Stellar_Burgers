import { FC } from "react";
import { Modal } from "../../../../Modal";
import Content from "./Content";
import { Data } from "../../../../../types";

export interface CardIngridientModalProps {
  readonly ingridient: Data;
  readonly onClose: (value: boolean) => void;
}

const CardIngridientModal: FC<CardIngridientModalProps> = ({
  ingridient,
  onClose = () => {},
}) => {
  return (
    <Modal onClose={() => onClose(false)} title={"Детали ингредиента"}>
      <Content ingridient={ingridient} />
    </Modal>
  );
};

export default CardIngridientModal;
