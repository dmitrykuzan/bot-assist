import { useState } from "react";
import { Hero } from "./sections";
import { ModalSendHistory } from "@components/modals";

export const Home = () => {
  const [modalSendHistoryActive, setModalSendHistoryActive] = useState(false);

  return (
    <>
      <Hero setModalSendHistoryActive={setModalSendHistoryActive} />
      <ModalSendHistory
        active={modalSendHistoryActive}
        setActive={setModalSendHistoryActive}
      />
    </>
  );
};
