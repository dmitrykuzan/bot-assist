import { Typography } from "@components/ui";

export const TextArea = (props) => {
  const { name, id, placeholder, label, maxlength } = props;

  return (
    <div className="textarea stack column">
      <Typography tag="span">{label}</Typography>

      <div className="textarea__wrapper">
        <textarea name={name} id={id} placeholder={placeholder}></textarea>
      </div>
      {maxlength && (
        <Typography tag="span" className="textarea__maxlength">
          {maxlength}
        </Typography>
      )}
    </div>
  );
};
