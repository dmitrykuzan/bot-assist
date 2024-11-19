import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { Hello } from "..";
import { Panel } from "@components/sections";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper stack">
          <div className="hero__chat">
            <div className="hero__chat-content">
              <SimpleBar
                className="wrapper-scroll"
                forceVisible="y"
                autoHide={false}
              >
                <Hello />

                <div className="hero__chat-guide stack column">
                  <div className="hero__chat-user-message">
                    {t.subtitle.synchronize}
                  </div>

                  <div className="hero__chat-bot-answer stack">
                    <div className="hero__chat-bot-avatar">
                      <img
                        src="/img/hero/bot.png"
                        width="40"
                        height="40"
                        alt="Bot"
                      />
                    </div>

                    <div className="hero__chat-bot-message stack column">
                      <div className="hero__chat-bot-message-info stack column">
                        <Typography tag="p">
                          {t.subtitle.bitrixSupport}
                        </Typography>
                        <Typography tag="p">{t.subtitle.cardDav}</Typography>
                      </div>

                      <ol className="hero__chat-bot-list numeric stack column">
                        <li>
                          {t.title.cessing}

                          <ul className="hero__chat-bot-sublist">
                            <li>{t.subtitle.openMyPage}</li>
                            <li>{t.subtitle.security}</li>
                          </ul>
                        </li>

                        <li>
                          {t.title.selectContact}

                          <ul className="hero__chat-bot-sublist hero__chat-bot-sublist--bold">
                            <li>{t.title.wantToSync}</li>
                          </ul>

                          <ul className="hero__chat-bot-sublist">
                            <li>{t.subtitle.systemUser}</li>
                            <li>{t.subtitle.extranet}</li>
                            <li>{t.subtitle.crmContact}</li>
                            <li>{t.subtitle.crmCompanies}</li>
                          </ul>
                        </li>

                        <li>
                          {t.title.default}

                          <ul className="hero__chat-bot-sublist">
                            <li>{t.subtitle.synchDefault}</li>
                          </ul>
                        </li>

                        <li>
                          {t.title.saving}

                          <ul className="hero__chat-bot-sublist">
                            <li>{t.subtitle.tickBoxes}</li>
                          </ul>
                        </li>

                        <li>
                          {t.title.device}

                          <ul className="hero__chat-bot-sublist">
                            <li>{t.subtitle.following}</li>
                          </ul>
                        </li>
                      </ol>

                      <ul className="hero__chat-bot-list disc">
                        <li>{t.title.additional}</li>

                        <ul className="hero__chat-bot-sublist">
                          <li>{t.subtitle.thirdParty}</li>
                          <li>{t.subtitle.synchCardDav}</li>
                        </ul>
                      </ul>

                      <div className="hero__chat-bot-help stack column">
                        <Typography
                          className="hero__chat-bot-help-title"
                          tag="h3"
                          variant="h3"
                          weight="500"
                        >
                          {t.title.fullguide}
                        </Typography>

                        <div className="hero__chat-bot-buttons stack">
                          <button className="hero__chat-bot-button button-gradient">
                            <span className="text stack">
                              {t.actions.newChat}
                              <span className="icon stack center">
                                <svg
                                  width="24"
                                  height="25"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 17.5001L17 7.50012"
                                    stroke="#2B2B2B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7 7.50012H17V17.5001"
                                    stroke="#2B2B2B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </span>
                          </button>
                          <button className="hero__chat-bot-button button-gradient">
                            <span className="text stack">
                              {t.actions.clean}
                              <span className="icon stack center">
                                <svg
                                  width="24"
                                  height="25"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7 17.5001L17 7.50012"
                                    stroke="#2B2B2B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7 7.50012H17V17.5001"
                                    stroke="#2B2B2B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </span>
                          </button>
                        </div>

                        <Typography
                          className="hero__chat-bot-help-description"
                          tag="p"
                        >
                          {t.subtitle.demonstration}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className="hero__chat-user-message">
                    {t.subtitle.synchronize}
                  </div>

                  <div className="hero__chat-bot-answer stack">
                    <div className="hero__chat-bot-avatar">
                      <img
                        src="/img/hero/bot.png"
                        width="40"
                        height="40"
                        alt="Bot"
                      />
                    </div>

                    <div className="hero__chat-bot-message stack column">
                      <div className="hero__chat-bot-help stack column">
                        <Typography
                          className="hero__chat-bot-help-title"
                          tag="h3"
                          variant="h3"
                          weight="500"
                        >
                          {t.title.reached}
                        </Typography>

                        <Typography
                          className="hero__chat-bot-help-description"
                          tag="p"
                        >
                          {t.subtitle.queryLimit}
                        </Typography>

                        <button className="hero__chat-bot-help-button button-gradient stack center">
                          <span className="text stack">
                            <span className="icon stack center">
                              <img
                                src="/img/ui/price-button-star.svg"
                                width="24"
                                height="24"
                                alt="Star"
                              />
                            </span>
                            {t.actions.increasePlan}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleBar>
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

          <Panel />
        </div>
      </Container>
      <span className="hero__decor-bottom"></span>
    </section>
  );
};
