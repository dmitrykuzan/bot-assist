import { useState } from "react";
import { Header } from "@components/sections";
import {
  ModalConsult,
  ModalError,
  ModalLanguage,
  ModalPolicy,
  ModalPrice,
  ModalSendHistory,
  ModalSuccess,
} from "@components/modals";

export const MainLayout = (props) => {
  const { overflow = true, children, className = "" } = props;

  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalPriceActive, setModalPriceActive] = useState(false);
  const [modalLanguageActive, setModalLanguageActive] = useState(false);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);
  const [modalErrorActive, setModalErrorActive] = useState(false);
  const [modalSendHistoryActive, setModalSendHistoryActive] = useState(false);
  const [modalPolicyActive, setModalPolicyActive] = useState(false);

  return (
    <div className={overflow ? "wrapper overflow" : "wrapper"}>
      <Header
        setModalConsultActive={setModalConsultActive}
        setModalPriceActive={setModalPriceActive}
        setModalSendHistoryActive={setModalSendHistoryActive}
        setModalPolicyActive={setModalPolicyActive}
      />

      <main>{children}</main>

      <ModalConsult
        active={modalConsultActive}
        setActive={setModalConsultActive}
        setModalPolicyActive={setModalPolicyActive}
      />
      <ModalPrice
        active={modalPriceActive}
        setActive={setModalPriceActive}
        setModalPolicyActive={setModalPolicyActive}
      />
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
        setModalPolicyActive={setModalPolicyActive}
      />
      <ModalError active={modalErrorActive} setActive={setModalErrorActive} />
      <ModalPolicy
        active={modalPolicyActive}
        setActive={setModalPolicyActive}
      />
    </div>
  );
};
