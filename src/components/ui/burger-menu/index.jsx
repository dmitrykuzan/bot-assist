import { useOnClickOutside, useTranslation } from "@hooks";
import { useRef } from "react";
import { Panel } from "@components/sections";

export const BurgerMenu = (props) => {
  const {
    isMenuOpen,
    onClose,
    setModalConsultActive,
    setModalPriceActive,
    setModalSendHistoryActive,
    setIsMenuOpen,
  } = props;

  const t = useTranslation();

  const ref = useRef();

  useOnClickOutside(ref, onClose);

  //* click policy link
  const handlePriceModal = (event) => {
    setIsMenuOpen(false);
    setModalPriceActive(true);
  };

  const handleConsultModal = (event) => {
    setIsMenuOpen(false);
    setModalConsultActive(true);
  };

  const handleHistoryModal = (event) => {
    setIsMenuOpen(false);
    setModalSendHistoryActive(true);
  };

  return (
    <div
      ref={ref}
      className={
        isMenuOpen ? "burger__menu burger__menu--active" : "burger__menu"
      }
    >
      <div className="burger__menu-wrapper stack column justify-space-between ">
        <div className="burger__menu-top stack column">
          <button className="burger__menu-close" onClick={onClose}></button>
          <div className="burger__menu-header stack column">
            <div className="burger__menu-navigation stack column">
              <button className="header__button-bitrix button-gradient">
                <span className="text">{t.actions.bitrixHelp}</span>
              </button>
              <button
                className="header__button button-purple header__button--plans stack align-center"
                onClick={handlePriceModal}
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
              <button className="button-purple" onClick={handleConsultModal}>
                {t.actions.consult}
              </button>
            </div>
            <Panel
              handlePriceModal={handlePriceModal}
              handleHistoryModal={handleHistoryModal}
              setModalPriceActive={setModalPriceActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
