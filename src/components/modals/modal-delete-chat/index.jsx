import { Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useEffect, useRef } from "react";

export const ModalDeleteChat = (props) => {
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
        className="modal__content modal-delete-chat stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper stack column">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <div className="modal-delete-chat__wrapper stack column">
            <div className="modal-delete-chat__text stack column">
              <Typography variant="h2" tag="h3" weight="500" center>
                {t.title.deleteChats}
              </Typography>
              <Typography
                className="modal-delete-chat__description"
                tag="p"
                center
              >
                {t.subtitle.sureDelete}
              </Typography>
            </div>
            <div className="modal-delete-chat__buttons stack align-center justify-center">
              <button
                className="modal-delete-chat__submit button-purple"
                type="submit"
              >
                {t.actions.deleteChat}
              </button>
              <button
                className="modal-delete-chat__submit button-gradient"
                type="submit"
              >
                <span className="text">{t.actions.cancel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
