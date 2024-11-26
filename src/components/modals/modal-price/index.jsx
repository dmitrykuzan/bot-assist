import { useEffect, useRef, useState } from "react";
import { CheckBox, Dropdown, Input, Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export const ModalPrice = (props) => {
  //**props
  const { active, setActive, setModalPolicyActive } = props;

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

  //* click policy link
  const handlePolicyLink = (event) => {
    setActive(false);
    setModalPolicyActive(true);
  };

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
        <div className="modal__content-wrapper">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>
          <SimpleBar
            forceVisible="y"
            autoHide={false}
            className="wrapper-scroll "
          >
            <div className="modal-price__body stack column">
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
                  label={t.actions.chooseTarif}
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
                  textLink={t.actions.freeLink}
                  srcLink={"https://bitrix24.eu/create.php?p=8966139/"}
                  isChecked={isCheckedBitrix}
                  onChange={() => setIsCheckedBitrix(!isCheckedBitrix)}
                  label={t.actions.selectBitrix}
                />

                <div className="modal-price__form-fields">
                  <Input
                    required
                    placeholder={t.actions.value}
                    label={t.actions.portalAddress}
                    type="text"
                  />
                  <Input
                    required
                    placeholder={t.actions.value}
                    label={t.actions.companyName}
                    type="text"
                  />
                  <Input
                    required
                    placeholder={t.actions.value}
                    label={t.actions.registrationNumber}
                    type="text"
                  />
                  <Input
                    required
                    placeholder={t.actions.value}
                    label={t.actions.billingQuestions}
                    type="text"
                  />
                  <Input
                    required
                    placeholder={t.actions.value}
                    label={t.actions.emailInvoice}
                    type="text"
                  />
                </div>
                <CheckBox
                  isChecked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  label={t.actions.iconfirm}
                  textLink={t.actions.terms}
                  srcLink={"/"}
                  onClick={handlePolicyLink}
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
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};
