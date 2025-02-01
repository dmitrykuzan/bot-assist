import { useState } from "react";
import {
  Burger,
  BurgerMenu,
  Container,
  Currency,
  Language,
  Logo,
} from "@components/ui";
import { useTranslation } from "@hooks";

export const Header = (props) => {
  const {
    setModalConsultActive,
    setModalPriceActive,
    setModalSendHistoryActive,
    setModalDeleteChatActive,
    setModalPolicyActive,
  } = props;

  const t = useTranslation();

  //**Menu burger state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <BurgerMenu
        setModalSendHistoryActive={setModalSendHistoryActive}
        setModalDeleteChatActive={setModalDeleteChatActive}
        setModalConsultActive={setModalConsultActive}
        setModalPriceActive={setModalPriceActive}
        setModalPolicyActive={setModalPolicyActive}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <header className="header">
        <Container>
          <div className="header__wrapper stack justify-space-between align-center">
            <Logo src="/img/ui/logo.svg" />

            <div className="header__navigation stack align-center">
              <button className="header__button-bitrix button-gradient">
                <span className="text">{t.actions.loginBitrix}</span>
              </button>
              <button
                className="header__button button-purple header__button--plans stack align-center"
                onClick={() => setModalPriceActive(true)}
              >
                <span className="icon stack center">
                  <img
                    src="/img/ui/price-button-star.svg"
                    width="24"
                    height="24"
                    alt="Star"
                  />
                </span>

                <span className="header__button-plans-text">
                  {t.actions.plans}
                </span>
              </button>
              <button
                className="button-purple"
                onClick={() => setModalConsultActive(true)}
              >
                {t.actions.consult}
              </button>
            </div>

            <Burger openMenu={openMenu} isMenuOpen={isMenuOpen} />

            <div className="header__buttons stack align-center">
              <Language />
              <span className="header__buttons-separator"></span>
              <Currency options={["USD", "EUR"]} initialValue="USD" />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
