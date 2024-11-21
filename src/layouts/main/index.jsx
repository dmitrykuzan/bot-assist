import {
  ModalConsult,
  ModalError,
  ModalLanguage,
  ModalPrice,
  ModalSendHistory,
  ModalSuccess,
} from "@components/modals";
import { Footer, Header } from "@components/sections";
import { useState } from "react";

export const MainLayuot = (props) => {
  const { overflow = true, children, className = "" } = props;

  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalPriceActive, setModalPriceActive] = useState(false);
  const [modalLanguageActive, setModalLanguageActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);
  const [modalErrorActive, setModalErrorActive] = useState(false);
  const [modalSendHistoryActive, setModalSendHistoryActive] = useState(false);

  return (
    <div className={overflow ? "wrapper overflow" : "wrapper"}>
      <Header
        setModalConsultActive={setModalConsultActive}
        setModalPriceActive={setModalPriceActive}
        setModalSendHistoryActive={setModalSendHistoryActive}
      />
      <main>{children}</main>
      <Footer className={className} />

      <ModalConsult
        active={modalConsultActive}
        setActive={setModalConsultActive}
      />
      <ModalPrice active={modalPriceActive} setActive={setModalPriceActive} />
      <ModalLanguage
        active={modalLanguageActive}
        setActive={setModalLanguageActive}
      />
      <ModalSuccess
        active={modalSuccessActive}
        setActive={setModalSuccessActive}
      />
      <ModalSendHistory
        active={modalSendHistoryActive}
        setActive={setModalSendHistoryActive}
      />
      <ModalError active={modalErrorActive} setActive={setModalErrorActive} />
    </div>
  );
};
