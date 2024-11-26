import { useEffect, useRef } from "react";
import { Typography } from "@components/ui";
import SimpleBar from "simplebar-react";
import { useOnClickOutside, useTranslation } from "@hooks";
import "simplebar-react/dist/simplebar.min.css";

export const ModalPolicy = (props) => {
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
        className="modal__content modal-policy stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__content-wrapper stack column">
          <button
            className="modal__close"
            onClick={() => setActive(false)}
          ></button>

          <SimpleBar
            forceVisible="y"
            autoHide={false}
            className="wrapper-scroll stack column"
          >
            <div className="modal-policy__wrapper stack column">
              <Typography tag="h3" variant="h2" weight="500" center>
                {t.title.termsConditions}
              </Typography>

              <div className="modal-policy__content stack column">
                <Typography tag="p">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </Typography>
                <Typography tag="p">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </Typography>
                <Typography tag="h4">
                  What information do we collect?
                </Typography>
                <Typography tag="p">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                </Typography>
                <Typography tag="p">
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                  mauris id. Non pellentesque congue eget consectetur turpis.
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                  aenean tempus. Quis velit eget ut tortor tellus. Sed vel,
                  congue felis elit erat nam nibh orci.
                </Typography>
                <ul>
                  <li>
                    Dolor enim eu tortor urna sed duis nulla. Aliquam
                    vestibulum, nulla odio nisl vitae. In aliquet pellentesque
                    aenean hac vestibulum turpis mi bibendum diam. Tempor
                    integer aliquam in vitae malesuada fringilla.
                  </li>
                  <li>
                    Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
                    enim mauris id. Non pellentesque congue eget consectetur
                    turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                    tincidunt aenean tempus. Quis velit eget ut tortor tellus.
                    Sed vel, congue felis elit erat nam nibh orci.
                  </li>
                  <li>
                    Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                    imperdiet commodo consectetur convallis risus. Sed
                    condimentum enim dignissim adipiscing faucibus consequat,
                    urna. Viverra purus et erat auctor aliquam. Risus, volutpat
                    vulputate posuere purus sit congue convallis aliquet. Arcu
                    id augue ut feugiat donec porttitor neque. Mauris, neque
                    ultricies eu vestibulum, bibendum quam lorem id. Dolor
                    lacus, eget nunc lectus in tellus, pharetra, porttitor.
                  </li>
                </ul>
                <Typography tag="h4">
                  How do we use your information?
                </Typography>

                <Typography tag="p">
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                </Typography>

                <Typography tag="p">
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                  mauris id. Non pellentesque congue eget consectetur turpis.
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                  aenean tempus. Quis velit eget ut tortor tellus. Sed vel,
                  congue felis elit erat nam nibh orci.
                </Typography>

                <Typography tag="h4">
                  Do we use cookies and other tracking technologies?
                </Typography>

                <Typography tag="p">
                  Pharetra morbi libero id aliquam elit massa integer tellus.
                  Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper
                  sit dictumst ut eget a, elementum eu. Maecenas est morbi
                  mattis id in ac pellentesque ac.
                </Typography>

                <Typography tag="h4">
                  How long do we keep your information?
                </Typography>

                <Typography tag="p">
                  Pharetra morbi libero id aliquam elit massa integer tellus.
                  Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper
                  sit dictumst ut eget a, elementum eu. Maecenas est morbi
                  mattis id in ac pellentesque ac.
                </Typography>

                <Typography tag="h4">What are your privacy rights?</Typography>

                <Typography tag="p">
                  Pharetra morbi libero id aliquam elit massa integer tellus.
                  Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper
                  sit dictumst ut eget a, elementum eu. Maecenas est morbi
                  mattis id in ac pellentesque ac.
                </Typography>

                <Typography tag="h4">
                  How can you contact us about this policy?
                </Typography>

                <Typography tag="p">
                  Sagittis et eu at elementum, quis in. Proin praesent volutpat
                  egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi
                  ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
                  consectetur ac ultrices at diam dui eget fringilla tincidunt.
                  Arcu sit dignissim massa erat cursus vulputate gravida id. Sed
                  quis auctor vulputate hac elementum gravida cursus dis.
                </Typography>

                <ol>
                  <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                  <li>
                    Eu turpis posuere semper feugiat volutpat elit, ultrices
                    suspendisse. Auctor vel in vitae placerat.
                  </li>
                  <li>
                    Suspendisse maecenas ac donec scelerisque diam sed est duis
                    purus.
                  </li>
                </ol>
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};
