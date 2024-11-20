import { Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useEffect, useRef } from "react";

export const ModalError = (props) => {
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
        className="modal__content modal-error stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper stack column">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <div className="modal-error__wrapper stack column">
            <Typography
              className="modal-error__title"
              variant="h2"
              tag="h3"
              weight="500"
              center
              dangerouslySetInnerHTML={{
                __html: t.title.subError.replace(
                  /\{\{([^}]*)\}\}/g,
                  (__, captureGroup) => {
                    return `<span>${captureGroup}</span>`;
                  }
                ),
              }}
            ></Typography>

            <Typography className="modal-error__description" tag="p" center>
              {t.subtitle.wrong}
            </Typography>

            <button className="modal-error__submit button-dark" type="submit">
              {t.actions.retry}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
