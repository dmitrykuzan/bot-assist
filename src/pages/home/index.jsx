import { useState } from "react";
import { Hero } from "./sections";
import {
  ModalConsult,
  ModalPolicy,
  ModalPrice,
  ModalSendHistory,
  ModalDeleteChat,
  ModalError,
  ModalLanguage,
  ModalSuccess,
} from "@components/modals";

export const Home = () => {
  const [modalSendHistoryActive, setModalSendHistoryActive] = useState(false);
  const [modalPriceActive, setModalPriceActive] = useState(false);
  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalDeleteChatActive, setModalDeleteChatActive] = useState(false);
  const [modalPolicyActive, setModalPolicyActive] = useState(false);
  // const [modalLanguageActive, setModalLanguageActive] = useState(false);
  // const [modalSuccessActive, setModalSuccessActive] = useState(false);
  // const [modalErrorActive, setModalErrorActive] = useState(false);

  return (
    <>
      <Hero
        setModalPriceActive={setModalPriceActive}
        setModalSendHistoryActive={setModalSendHistoryActive}
        setModalConsultActive={setModalConsultActive}
        setModalDeleteChatActive={setModalDeleteChatActive}
        // setModalLanguageActive={setModalLanguageActive}
        // setModalSuccessActive={setModalSuccessActive}
        // setModalErrorActive={setModalErrorActive}
      />

      <ModalSendHistory
        active={modalSendHistoryActive}
        setActive={setModalSendHistoryActive}
        setModalPolicyActive={setModalPolicyActive}
      />
      <ModalPrice
        active={modalPriceActive}
        setActive={setModalPriceActive}
        setModalPolicyActive={setModalPolicyActive}
      />
      <ModalConsult
        active={modalConsultActive}
        setActive={setModalConsultActive}
        setModalPolicyActive={setModalPolicyActive}
      />
      <ModalDeleteChat
        active={modalDeleteChatActive}
        setActive={setModalDeleteChatActive}
      />
      <ModalPolicy
        active={modalPolicyActive}
        setActive={setModalPolicyActive}
      />

      {/* <ModalLanguage
        active={modalLanguageActive}
        setActive={setModalLanguageActive}
      /> */}
      {/* <ModalSuccess
        active={modalSuccessActive}
        setActive={setModalSuccessActive}
      />
      <ModalError active={modalErrorActive} setActive={setModalErrorActive} /> */}
    </>
  );
};
