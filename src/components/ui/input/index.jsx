import { Typography } from "@components/ui";

export const Input = (props) => {
  const { name, type = "text", placeholder, label, required } = props;

  return (
    <div className="input stack column">
      <Typography tag="span" className="input__label">
        {required && "*"}
        {label}
      </Typography>
      <div className="input__wrapper">
        <input name={name} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};
