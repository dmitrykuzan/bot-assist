import { CheckBox, Input, Typography } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import Script from "next/script";
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

  useEffect(() => {
    const formContainer = document.getElementById("b24-container");
    if (formContainer) {
      formContainer.innerHTML = `
        <script
          data-b24-form="inline/87/4mheci"
          data-skip-moving="true"
        >(function(w,d,u){
            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn.bitrix24.eu/b4256921/crm/form/loader_87.js');</script>`;
    }
  }, []);

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
            <Typography
              className="modal-send__history-title"
              tag="h3"
              variant="h2"
              weight="500"
            >
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

          <div id="b24-container"></div>

          <Script
            src={`https://cdn.bitrix24.eu/b4256921/crm/form/loader_87.js?${Math.floor(
              Date.now() / 180000
            )}`}
            strategy="lazyOnload"
            onLoad={() => {
              console.log("Bitrix24 script loaded");
            }}
          />
        </div>
      </div>
    </div>
  );
};
