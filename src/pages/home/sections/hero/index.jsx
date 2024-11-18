import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { Hello } from "..";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper">
          <div className="hero__chat">
            <div className="hero__chat-content">
              <Hello />
            </div>
            <div className="hero__chat-navigation stack column">
              <div className="hero__chat-navigation-wrapper stack align-center">
                <button className="hero__chat-button stack align-center">
                  <span className="stack center">
                    <img
                      src="/img/hero/call.svg"
                      width="18"
                      height="18"
                      alt="Call icon"
                    />
                  </span>
                  <span>{t.actions.book}</span>
                </button>
                <div className="hero__chat-input">
                  <input type="text" placeholder={t.actions.ask} />

                  <button className="hero__chat-input-submit stack center">
                    <img
                      className="arrow"
                      src="/img/ui/arrow-up-right.svg"
                      width="24"
                      height="24"
                      alt="Arrow"
                    />
                  </button>
                </div>
              </div>
              <Typography className="hero__chat-queries" tag="span">
                {t.common.queries}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
      <span className="hero__decor-bottom"></span>
    </section>
  );
};
