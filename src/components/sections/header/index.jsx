import { Container, Logo } from "@components/ui";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper stack justify-space-between">
          <Logo src="/img/ui/logo.svg" />

          <div className="header__navigation stack align-center">
            <button className="header__button-bitrix">
              <span>Bitrix24 Helper</span>
            </button>
            <button className="header__button-plans stack align-center">
              <span className="header__button-plans-icon stack center">
                <img
                  src="/img/ui/price-button-star.svg"
                  width="24"
                  height="24"
                  alt="Star"
                />
              </span>

              <span className="header__button-plans-text">
                Plans and Pricing
              </span>
            </button>
            <button className="header__button-consult">Our Consultants</button>
          </div>
        </div>
      </Container>
    </header>
  );
};
