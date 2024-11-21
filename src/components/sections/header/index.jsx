import { useState } from "react";
import { Burger, BurgerMenu, Container, Logo } from "@components/ui";
import { useTranslation } from "@hooks";

export const Header = (props) => {
  const {
    setModalConsultActive,
    setModalPriceActive,
    setModalSendHistoryActive,
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
        setModalConsultActive={setModalConsultActive}
        setModalPriceActive={setModalPriceActive}
        isMenuOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <header className="header">
        <Container>
          <div className="header__wrapper stack justify-space-between align-center">
            <Logo src="/img/ui/logo.svg" />

            <div className="header__navigation stack align-center">
              <button className="header__button-bitrix button-gradient">
                <span className="text">{t.actions.bitrixHelp}</span>
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
          </div>
        </Container>
      </header>
    </>
  );
};
