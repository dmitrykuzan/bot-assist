import { CheckBox, Input, Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useEffect, useRef, useState } from "react";

export const ModalSendHistory = (props) => {
  //**props
  const { active, setActive } = props;

  //** checkbox
  const [isChecked, setIsChecked] = useState(false);

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
        className="modal__content modal-send__history stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <form className="modal-send__history-form stack column">
            <Typography tag="h3" variant="h2" weight="500">
              {t.title.sendHistory}
            </Typography>
            <div className="modal-send__history-form-fields stack column">
              <Input
                label={t.actions.name}
                placeholder={t.actions.value}
                type="text"
              />
              <Input
                label={t.actions.email}
                placeholder={t.actions.value}
                type="email"
              />
            </div>
            <CheckBox
              isChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              label={t.common.iagree}
            />

            <button
              className="modal-send__history-form-submit button-purple"
              type="submit"
            >
              {t.actions.sendToEmail}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
