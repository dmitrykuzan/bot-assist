import { useEffect, useRef, useState } from "react";
import {
  CheckBox,
  Dropdown,
  Input,
  TextArea,
  Typography,
} from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";

export const ModalPrice = (props) => {
  //**props
  const { active, setActive } = props;

  //** checkbox
  const [isCheckedBitrix, setIsCheckedBitrix] = useState(false);
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
        className="modal__content modal-price stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper stack column">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>
          <div className="modal-price__text stack column">
            <Typography tag="h2" variant="h2" weight="400">
              {t.title.pricingPlans}
            </Typography>
            <Typography tag="p" className="modal-price__description">
              {t.subtitle.allPlans}
            </Typography>
            <Typography
              tag="p"
              className="modal-price__subtitle"
              weight="500"
              dangerouslySetInnerHTML={{
                __html: t.subtitle.supportConsult.replace(
                  /\{\{([^}]*)\}\}/g,
                  (__, captureGroup) => {
                    return `<span>${captureGroup}</span>`;
                  }
                ),
              }}
            ></Typography>
          </div>
          <div className="modal-price__dropdown stack align-center">
            <Dropdown
              label={t.actions.fullName}
              options={["Value", "Value1", "Value2"]}
              initialValue="Value"
            />
            <Dropdown
              label={t.actions.periodLicence}
              options={["Value", "Value1", "Value2"]}
              initialValue="Value"
            />
          </div>
          <form className="modal-price__form stack column">
            <CheckBox
              isChecked={isCheckedBitrix}
              onChange={() => setIsCheckedBitrix(!isCheckedBitrix)}
              label={t.actions.selectBitrix}
            />

            <div className="modal-price__form-fields">
              <Input
                placeholder={t.actions.value}
                label={t.actions.companyName}
                type="text"
              />
              <Input
                placeholder={t.actions.value}
                label={t.actions.portalAddress}
                type="text"
              />
              <Input
                placeholder={t.actions.value}
                label={t.actions.registrationNumber}
                type="text"
              />
              <Input
                placeholder={t.actions.value}
                label={t.actions.billingQuestions}
                type="text"
              />
              <Input
                placeholder={t.actions.value}
                label={t.actions.emailInvoice}
                type="text"
              />
            </div>
            <CheckBox
              isChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              label={t.actions.iconfirm}
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
