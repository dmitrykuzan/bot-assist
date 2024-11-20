import { useRef, useState } from "react";
import { useOnClickOutside } from "@hooks";
import { Typography } from "@components/ui";

export const Dropdown = (props) => {
  //Props
  const { label, options, initialValue } = props;

  // State Dropdown
  const [active, setActive] = useState(false);
  const toggleDropdown = () => setActive(!active);

  // Selected Option
  const [selectedOption, setSelectedOption] = useState(initialValue);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActive(false);
  };

  // Click Outside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(false));

  return (
    <div className="dropdown stack column" ref={ref}>
      {label && (
        <Typography className="input__label" tag="span">
          {label}
        </Typography>
      )}
      <div className={`dropdown__container ${active ? "active" : ""}`}>
        <button
          className="dropdown__selected stack align-center justify-space-between"
          onClick={toggleDropdown}
        >
          <span className="dropdown__value">{selectedOption}</span>
          <span className="dropdown__icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="1">
                <path
                  d="M15 5.19149L13.775 4L8.875 8.76596L8.00011 9.5L7.125 8.76596L2.225 4L1 5.19149L8 12L15 5.19149Z"
                  fill="#2B2B2B"
                />
              </g>
            </svg>
          </span>
        </button>
        <ul className="dropdown__options stack column">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown__option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
