import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Hello = () => {
  const t = useTranslation();

  return (
    <div className="hero__hello stack column">
      <div className="hero__hello-info stack column">
        <Typography
          className="hero__hello-title"
          tag="h1"
          variant="h1"
          weight="500"
          center
        >
          {t.title.hello}
        </Typography>

        <div className="hero__hello-text stack column">
          <Typography
            className="hero__hello-subtitle"
            tag="h2"
            weight="500"
            center
          >
            {t.subtitle.assist}
          </Typography>
          <Typography className="hero__hello-description" tag="p" center>
            {t.subtitle.help}
          </Typography>
        </div>
      </div>

      <ul className="hero__list stack justify-center">
        <li className="hero__list-item stack align-center column">
          <div className="hero__list-item-image">
            <img
              src="/img/hero/cash.svg"
              width="40"
              height="40"
              alt="Icon cash"
            />
          </div>
          <Typography
            className="hero__list-item-title"
            tag="h3"
            weight="400"
            center
          >
            {t.title.paymentsAndSub}
          </Typography>
        </li>
        <li className="hero__list-item hero__list-item--middle stack align-center column">
          <div className="hero__list-item-image">
            <img
              src="/img/hero/document.svg"
              width="45"
              height="45"
              alt="Icon document"
            />
          </div>
          <div className="hero__list-item-text stack column">
            <Typography
              className="hero__list-item-title"
              tag="h3"
              weight="400"
              center
            >
              {t.title.supportAndDocument}
            </Typography>
            <Typography className="hero__list-item-description" tag="p" center>
              {t.subtitle.needHelp}
            </Typography>
          </div>
        </li>
        <li className="hero__list-item stack align-center column">
          <div className="hero__list-item-image">
            <img
              src="/img/hero/up.svg"
              width="40"
              height="40"
              alt="Icon document"
            />
          </div>
          <Typography
            className="hero__list-item-title"
            tag="h3"
            weight="400"
            center
          >
            {t.title.updates}
          </Typography>
        </li>
      </ul>
    </div>
  );
};
