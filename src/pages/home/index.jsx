import { useState } from "react";
import { Hero } from "./sections";
import {
  ModalConsult,
  ModalError,
  ModalPrice,
  ModalSendHistory,
  ModalSuccess,
} from "@components/modals";

export const Home = () => {
  const [modalSendHistoryActive, setModalSendHistoryActive] = useState(false);
  const [modalPriceActive, setModalPriceActive] = useState(false);
  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);
  const [modalErrorActive, setModalErrorActive] = useState(false);

  return (
    <>
      <Hero
        setModalPriceActive={setModalPriceActive}
        setModalSendHistoryActive={setModalSendHistoryActive}
        setModalConsultActive={setModalConsultActive}
        setModalSuccessActive={setModalSuccessActive}
        setModalErrorActive={setModalErrorActive}
      />

      <ModalSendHistory
        active={modalSendHistoryActive}
        setActive={setModalSendHistoryActive}
      />
      <ModalPrice active={modalPriceActive} setActive={setModalPriceActive} />
      <ModalConsult
        active={modalConsultActive}
        setActive={setModalConsultActive}
      />

      <ModalSuccess
        active={modalSuccessActive}
        setActive={setModalSuccessActive}
      />
      <ModalError active={modalErrorActive} setActive={setModalErrorActive} />
    </>
  );
};
