import { Typography } from "@components/ui";

export const CheckBox = (props) => {
  const {
    isChecked,
    onChange,
    name,
    label,
    srcLink,
    textLink,
    onClick,
    required,
    className,
  } = props;

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
      event.preventDefault();
    }
  };

  return (
    <div className={`${className ? className : ""} checkbox`}>
      <label className="checkbox-label stack align-center">
        <input
          className="checkbox-input"
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={() => onChange((prev) => !prev)}
        />
        <span className="checkbox-fake stack center">
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 9.4L0.5 5.4L1.9 4L4.5 6.6L11.1 0L12.5 1.4L4.5 9.4Z"
              // fill="#2b2b2b"
            />
          </svg>
        </span>
        {label && (
          <Typography className="checkbox-text" tag="span">
            {`${required && required ? "*" : ""} ${label}`}
            {textLink && (
              <a href={srcLink} target="_blank" onClick={handleClick}>
                {textLink}
              </a>
            )}
          </Typography>
        )}
      </label>
    </div>
  );
};
