import { Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useEffect, useRef } from "react";

export const ModalLanguage = (props) => {
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
        className="modal__content modal-language stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper stack column">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <div className="modal-language__wrapper stack column">
            <div className="modal-language__text stack column">
              <Typography variant="h2" tag="h3" weight="500" center>
                {t.title.language}
              </Typography>
              <Typography
                className="modal-language__description"
                tag="p"
                center
              >
                {t.subtitle.detected}
              </Typography>
            </div>
            <div className="modal-language__buttons stack align-center">
              <button
                className="modal-language__submit button-purple"
                type="submit"
              >
                {t.actions.continueFr}
              </button>
              <button
                className="modal-language__submit button-purple"
                type="submit"
              >
                {t.actions.keepEng}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
