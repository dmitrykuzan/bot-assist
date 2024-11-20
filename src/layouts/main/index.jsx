import { ModalConsult, ModalPrice } from "@components/modals";
import { Footer, Header } from "@components/sections";
import { useState } from "react";

export const MainLayuot = (props) => {
  const { overflow = true, children, className = "" } = props;

  const [modalConsultActive, setModalConsultActive] = useState(false);
  const [modalPriceActive, setModalPriceActive] = useState(false);

  return (
    <div className={overflow ? "wrapper overflow" : "wrapper"}>
      <Header
        setModalConsultActive={setModalConsultActive}
        setModalPriceActive={setModalPriceActive}
      />
      <main>{children}</main>
      <Footer className={className} />

      <ModalConsult
        active={modalConsultActive}
        setActive={setModalConsultActive}
      />
      <ModalPrice active={modalPriceActive} setActive={setModalPriceActive} />
    </div>
  );
};
