import { useEffect, useRef, useState } from "react";
import {
  CheckBox,
  Dropdown,
  Input,
  TextArea,
  Typography,
  Upload,
} from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";

export const ModalFeedback = (props) => {
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
        className="modal__content modal-feedback stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <div className="modal-feedback__body stack column">
            <div className="modal-feedback__text stack column">
              <Typography
                className="modal-feedback__title"
                tag="h2"
                variant="h2"
                weight="400"
              >
                {t.title.feedback}
              </Typography>
            </div>
            <form className="modal-feedback__form stack column">
              <Dropdown
                label={t.actions.mainProblem}
                options={[
                  "Incorrect Answer",
                  "Bot Not Responding",
                  "Other Issue",
                ]}
                placeholder="Select"
              />

              <TextArea
                label={t.actions.wentWrong}
                name="message"
                placeholder={t.actions.aboutProblem}
                maxlength={t.actions.maxLength1000}
              />

              <Input
                required
                placeholder={t.actions.email}
                label={t.actions.leaveEmail}
                type="email"
              />

              <Upload />

              <CheckBox
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                label={t.actions.iconfirm}
                required
              />
              <button
                className="modal-consult__submit button-purple"
                type="submit"
              >
                {t.actions.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
