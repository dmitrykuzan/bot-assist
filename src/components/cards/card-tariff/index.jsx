import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const CardTariff = (props) => {
  const {
    srcIcon,
    title,
    descriptionTop,
    descriptionBottom,
    price,
    currency,
    bgColor,
    borderColor,
    setModalPriceActive,
    onClick,
    enterprice,
  } = props;

  const t = useTranslation();

  return (
    <div
      className={`${
        enterprice && enterprice ? "enterprice" : ""
      } panel__price stack column`}
      style={{
        background: bgColor && bgColor ? bgColor : "var(--clr-gradient-200)",
        border: `0.1rem solid ${
          borderColor && borderColor ? borderColor : "var(--clr-default-200)"
        }`,
      }}
    >
      <div className="panel__price-image">
        <img src={srcIcon} width="48" height="48" alt="Decor" />
      </div>

      <div className="panel__price-info stack column">
        <Typography
          className="panel__price-title"
          tag="h3"
          weight="500"
          upperCase
        >
          {title}
        </Typography>
        <div className="panel__price-description stack column">
          <Typography className="panel__price-subtitle" tag="h4">
            {descriptionTop}
          </Typography>
          <Typography className="panel__price-text" tag="p">
            {descriptionBottom}
          </Typography>
        </div>
      </div>

      <div className="panel__price-bottom stack align-center justify-space-between">
        <div className="panel__price-value stack align-center">
          <Typography className="panel__price-value-currency" tag="span">
            {currency}
          </Typography>
          <Typography className="panel__price-value-total" tag="span">
            {price}
          </Typography>
          <Typography className="panel__price-value-period" tag="span">
            / mo
          </Typography>
        </div>

        <button
          className="button-gradient"
          onClick={onClick ? onClick : () => setModalPriceActive(true)}
        >
          <span className="text stack">{t.actions.order}</span>
        </button>
      </div>
    </div>
  );
};
