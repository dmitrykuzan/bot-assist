import { CheckBox, Input, TextArea, Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useEffect, useRef, useState } from "react";

export const ModalConsult = (props) => {
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
        className="modal__content modal-consult stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper stack column">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <div className="modal-consult__text stack column">
            <Typography tag="h2" variant="h2" weight="500">
              {t.title.consultant}
            </Typography>
            <Typography className="modal-consult__description" tag="p">
              {t.subtitle.directly}
            </Typography>
            <Typography
              className="modal-consult__subtitle"
              tag="h3"
              weight="500"
            >
              {t.title.stayTuned}
            </Typography>
          </div>

          <form className="modal-consult__form stack column">
            <div className="modal-consult__form-fields stack column">
              <Input
                label={t.actions.fullName}
                placeholder={t.actions.value}
                type="text"
              />
              <Input
                label={t.actions.email}
                placeholder={t.actions.value}
                type="email"
              />
              <TextArea
                label={t.actions.message}
                name="message"
                placeholder={t.actions.value}
              />
            </div>
            <CheckBox
              isChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              label={t.common.agreeProcessing}
            />

            <button className="modal-consult__submit button-dark" type="submit">
              {t.actions.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
