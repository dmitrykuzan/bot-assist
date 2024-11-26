import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Language, Theme, Typography } from "@components/ui";
import { CardTariff } from "@components/cards";
import { SLIDES, SliderSettings } from "@utils";
import SimpleBar from "simplebar-react";
import { useTranslation } from "@hooks";
import "simplebar-react/dist/simplebar.min.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/zoom";

export const Panel = (props) => {
  //props
  const { setModalPriceActive, handleHistoryModal, handlePriceModal } = props;

  const t = useTranslation();

  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="panel stack column">
      <div className="panel__top-buttons stack">
        <button className="panel__top-button button-gradient">
          <span className="text stack">
            {t.actions.newChat}
            <span className="icon">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 4H4.5C3.96957 4 3.46086 4.21071 3.08579 4.58579C2.71071 4.96086 2.5 5.46957 2.5 6V20C2.5 20.5304 2.71071 21.0391 3.08579 21.4142C3.46086 21.7893 3.96957 22 4.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V13"
                  stroke="#2B2B2B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 2.50001C19.3978 2.10219 19.9374 1.87869 20.5 1.87869C21.0626 1.87869 21.6022 2.10219 22 2.50001C22.3978 2.89784 22.6213 3.4374 22.6213 4.00001C22.6213 4.56262 22.3978 5.10219 22 5.50001L12.5 15L8.5 16L9.5 12L19 2.50001Z"
                  stroke="#2B2B2B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </button>
        <button className="panel__top-button button-gradient">
          <span className="text">
            {t.actions.clean}
            <span className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H5H21"
                  stroke="#2B2B2B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                  stroke="#2B2B2B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 11V17"
                  stroke="#2B2B2B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11V17"
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

      <div className="panel__options stack align-center justify-space-between">
        <Language />
        {/* <Theme /> */}
      </div>

      <div className="panel__chat stack column">
        <div className="panel__chat-top stack justify-space-between">
          <Typography className="panel__chat-title" tag="h3" weight="500">
            {t.title.chatHistory}
          </Typography>

          <div className="panel__chat-buttons stack align-center">
            <div className="panel__chat-search-wrapper">
              <button
                className="panel__chat-search stack center"
                onClick={() => setSearchActive(true)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#2B2B2B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0004 21L16.6504 16.65"
                    stroke="#2B2B2B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={` ${
                  searchActive ? "active" : ""
                } panel__chat-search-area`}
              >
                <div className="panel__chat-search-input">
                  <input type="search" placeholder="search" />
                  <div
                    className="panel__chat-search-close"
                    onClick={() => setSearchActive(false)}
                  ></div>
                </div>
              </div>
            </div>

            {/* <button className="panel__chat-filter stack center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                  stroke="#2B2B2B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}
          </div>
        </div>

        <div className="panel__chat-content stack column">
          <SimpleBar
            forceVisible="y"
            autoHide={false}
            className="wrapper-scroll stack column"
          >
            <div className="panel__chat-message stack column">
              <Typography className="panel__chat-message-text" tag="p">
                "How do I set up automated reminders in the CRM system?"
              </Typography>

              <span className="panel__chat-message-date">
                11/11/2024, 10:08pm
              </span>
            </div>

            <div className="panel__chat-message stack column">
              <Typography className="panel__chat-message-text" tag="p">
                "Can I integrate my email with this CRM platform?"
              </Typography>

              <span className="panel__chat-message-date">
                11/11/2024, 10:08pm
              </span>
            </div>

            <div className="panel__chat-message stack column">
              <Typography className="panel__chat-message-text" tag="p">
                "How do I import my existing customer database into the CRM?"
              </Typography>

              <span className="panel__chat-message-date">
                11/11/2024, 10:08pm
              </span>
            </div>

            <div className="panel__chat-message stack column">
              <Typography className="panel__chat-message-text" tag="p">
                "How do I import my existing customer database into the CRM?"
              </Typography>

              <span className="panel__chat-message-date">
                11/11/2024, 10:08pm
              </span>
            </div>
          </SimpleBar>
        </div>

        <div className="panel__chat-bottom stack column">
          <button
            className="panel__chat-bottom-btn button-gradient"
            onClick={handleHistoryModal}
          >
            <span className="text stack">
              <span className="text">
                <span className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3711 10.7195C13.3685 10.3053 13.0306 9.97162 12.6164 9.9742C12.2022 9.97677 11.8685 10.3146 11.8711 10.7288L13.3711 10.7195ZM12.1461 19.6272C12.4408 19.9183 12.9156 19.9153 13.2067 19.6206L17.9499 14.8181C18.241 14.5234 18.238 14.0485 17.9433 13.7575C17.6486 13.4664 17.1738 13.4693 16.8827 13.764L12.6665 18.033L8.39758 13.8168C8.10287 13.5257 7.62801 13.5286 7.33694 13.8233C7.04587 14.118 7.04882 14.5929 7.34353 14.884L12.1461 19.6272ZM11.8711 10.7288L11.9231 19.0983L13.4231 19.0889L13.3711 10.7195L11.8711 10.7288Z"
                      fill="#2B2B2B"
                    />
                    <path
                      d="M20.8127 21.9372H12.7894H4.19119C3.81053 21.9372 3.50195 21.6286 3.50195 21.248V7.98764C3.50195 7.60698 3.81053 7.2984 4.19119 7.2984H20.8127C21.1934 7.2984 21.502 7.60698 21.502 7.98764V21.248C21.502 21.6286 21.1934 21.9372 20.8127 21.9372Z"
                      stroke="#2B2B2B"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.50977 7.77845L5.56363 3.86371C5.68267 3.63682 5.91775 3.49469 6.17397 3.49469H18.9489C19.212 3.49469 19.4522 3.64453 19.5679 3.88088L21.4593 7.74438"
                      stroke="#2B2B2B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                {t.actions.sendEmail}
              </span>
            </span>
          </button>

          <Typography className="panel__chat-bottom-policy" tag="p">
            {t.common.saving}
          </Typography>
        </div>
      </div>

      <Swiper
        className="swiper panel__slider"
        modules={[Autoplay, Pagination]}
        loop={true}
        slidesPerView={1}
        spaceBetween={SliderSettings.spaceBetween}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: SliderSettings.delay,
        }}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <CardTariff
              srcIcon={slide.srcIcon}
              title={t.title[slide.title]}
              descriptionTop={t.subtitle[slide.descriptionTop]}
              descriptionBottom={t.subtitle[slide.descriptionBottom]}
              price={slide.price}
              currency={slide.currency}
              bgColor={slide.bgColor}
              onClick={handlePriceModal}
              setModalPriceActive={setModalPriceActive}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
