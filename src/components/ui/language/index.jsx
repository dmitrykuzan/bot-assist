import { useRef, useState } from "react";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { Typography } from "@components/ui";

export const Language = () => {
  //translation
  const t = useTranslation();
  //translation

  //active dropdown
  const [active, setActive] = useState(true);

  const toggleLanguage = () => {
    setActive(!active);
  };
  //active dropdown

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(true));
  //ClickOutside

  //locale
  const { locale, locales, asPath, push } = useRouter();

  const handleLocale = (newlocale) => () => {
    const expires = new Date();
    // 365 days after today
    expires.setDate(expires.getDate() + 365);

    setCookie("NEXT_LOCALE", newlocale, {
      expires,
    });

    push(asPath, asPath, {
      locale: newlocale,
    });
  };
  //locale

  return (
    <div
      ref={ref}
      className={active ? "language" : "language language--active"}
    >
      <button
        className="language__button stack center"
        onClick={toggleLanguage}
      >
        <span className="language__button-icon stack">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.1 5.2L7.3 9.4M2.4 9.4L6.6 5.2L8 3.1M1 3.1H9.4M4.5 1H5.2M15 15L11.5 8L8 15M9.4 12.2H13.6"
              stroke="#373737"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <Typography tag="span" className="language__button-text">
          {locale.toUpperCase()}
        </Typography>
      </button>
      <ul className="language__dropdown stack column">
        {locales?.map((lang) => {
          return (
            <li
              key={lang}
              onClick={handleLocale(lang)}
              className="language__item stack center"
            >
              <div className="language__item-name">{t.actions[lang]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
