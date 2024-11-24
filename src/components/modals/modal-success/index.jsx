import { Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useEffect, useRef } from "react";

export const ModalSuccess = (props) => {
  //**props
  const { active, setActive } = props;

  //** body add class
  useEffect(() => {
    if (active) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }

    return () => {
      document.body.classList.remove("lock");
    };
  }, [active]);

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(false));

  //** translation
  const t = useTranslation();

  return (
    <div
      className={
        active ? "modal modal--active stack center" : "modal stack center"
      }
    >
      <div
        ref={ref}
        className="modal__content modal-success stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper stack column">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <div className="modal-success__wrapper stack column">
            <div className="modal-success__text stack column">
              <Typography variant="h2" tag="h3" weight="500" center>
                {t.title.formSubmit}
              </Typography>
              <Typography
                className="modal-success__subtitle"
                tag="h3"
                variant="h2"
                center
                upperCase
              >
                {t.title.successfully}
              </Typography>

              <div className="modal-success__icon stack center">
                <img
                  src="/img/ui/success.svg"
                  width="27"
                  height="18"
                  alt="Success done"
                />
              </div>

              <Typography className="modal-success__description" tag="p" center>
                {t.subtitle.thankYou}
              </Typography>
            </div>
            <button
              className="modal-success__submit button-purple"
              type="submit"
            >
              {t.actions.ok}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
