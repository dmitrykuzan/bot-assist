import { Typography } from "@components/ui";

export const TextArea = (props) => {
  const { name, id, placeholder, label } = props;

  return (
    <div className="textarea stack column">
      <Typography>{label}</Typography>

      <div className="textarea__wrapper">
        <textarea name={name} id={id} placeholder={placeholder}></textarea>
      </div>
    </div>
  );
};
