import { Container, Logo } from "@components/ui";
import { useTranslation } from "@hooks";

export const Header = () => {
  const t = useTranslation();

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper stack justify-space-between">
          <Logo src="/img/ui/logo.svg" />

          <div className="header__navigation stack align-center">
            <button className="header__button-bitrix button-gradient">
              <span className="text">{t.actions.bitrixHelp}</span>
            </button>
            <button className="header__button button-purple header__button--plans stack align-center">
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
            <button className="button-purple">{t.actions.consult}</button>
          </div>
        </div>
      </Container>
    </header>
  );
};
