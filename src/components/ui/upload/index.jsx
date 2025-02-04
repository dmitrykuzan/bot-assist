import { useState } from "react";
import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Upload = (props) => {
  const {} = props;
  const t = useTranslation();

  const [uploadState, setUploadState] = useState("idle"); // idle | loading | done

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setUploadState("loading");

      // Симуляция загрузки файла
      setTimeout(() => {
        setUploadState("done");
      }, 2000);
    }
  };

  return (
    <div className="upload stack column">
      <Typography tag="span" className="upload__title">
        {t.actions.attachScreenshot}
      </Typography>
      <div className="upload__wrapper">
        <input
          className="upload__input"
          id="upload__file"
          type="file"
          onChange={handleFileChange}
        />
        <label className="upload__label stack center" htmlFor="upload__file">
          {uploadState === "loading" ? (
            <span className="upload__icon upload__icon--loading stack center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.00001C18 13.9706 13.9706 18 9 18C4.02944 18 5.18102e-06 13.9706 5.18102e-06 9.00001C5.18102e-06 4.02945 4.02944 1.02775e-05 9 1.02775e-05C13.9706 1.02775e-05 18 4.02945 18 9.00001ZM1.71632 9.00001C1.71632 13.0227 4.97733 16.2837 9 16.2837C13.0227 16.2837 16.2837 13.0227 16.2837 9.00001C16.2837 4.97734 13.0227 1.71632 9 1.71632C4.97733 1.71632 1.71632 4.97734 1.71632 9.00001Z"
                  fill="#C8C8C8"
                />
                <path
                  d="M13.1933 16.9634C14.8965 16.0666 16.2673 14.6473 17.1044 12.914C17.9415 11.1806 18.2008 9.22456 17.8443 7.33298C17.4877 5.44139 16.5341 3.71395 15.1234 2.40429C13.7128 1.09463 11.9194 0.271749 10.0065 0.0564726C8.09373 -0.158804 6.16228 0.244865 4.4958 1.20821C2.82931 2.17155 1.51559 3.64382 0.747522 5.40883C-0.0205467 7.17385 -0.202494 9.13862 0.228395 11.0147C0.659283 12.8907 1.68031 14.5792 3.14155 15.8322L4.25876 14.5293C3.07618 13.5152 2.24987 12.1487 1.90115 10.6305C1.55243 9.11218 1.69968 7.5221 2.32128 6.09368C2.94288 4.66525 4.00607 3.47375 5.35475 2.69412C6.70344 1.91448 8.26655 1.58779 9.81459 1.76202C11.3626 1.93624 12.814 2.6022 13.9557 3.6621C15.0973 4.72201 15.8691 6.12003 16.1576 7.65088C16.4462 9.18174 16.2363 10.7648 15.5589 12.1676C14.8814 13.5704 13.772 14.719 12.3936 15.4448L13.1933 16.9634Z"
                  fill="#373737"
                />
              </svg>
            </span>
          ) : uploadState === "done" ? (
            <span className="upload__icon upload__icon--done stack center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 5.25L6.75 14.25L2.625 10.125L3.6825 9.0675L6.75 12.1275L14.6925 4.1925L15.75 5.25Z"
                  fill="#373737"
                />
              </svg>
            </span>
          ) : (
            <span className="upload__icon stack center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.94 9.06L9 15L3.06 9.06L4.125 8.0025L8.25 12.1275V1.5H9.75V12.1275L13.875 7.995L14.94 9.06ZM9 15H1.5V16.5H16.5V15H9Z"
                  fill="#373737"
                />
              </svg>
            </span>
          )}

          {uploadState === "loading" ? (
            <Typography tag="span" className="upload__text">
              {t.actions.uploadingFile}
            </Typography>
          ) : uploadState === "done" ? (
            <Typography tag="span" className="upload__text">
              {t.actions.uploadedFile}
            </Typography>
          ) : (
            <Typography tag="span" className="upload__text">
              {t.actions.uploadFile}
            </Typography>
          )}
        </label>
      </div>
      <Typography tag="span" className="upload__formats">
        {t.common.formats}
      </Typography>
    </div>
  );
};
