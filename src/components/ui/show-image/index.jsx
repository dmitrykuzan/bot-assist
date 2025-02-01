import { useState } from "react";

export const ShowImage = () => {
  // State Dropdown
  const [active, setActive] = useState(false);

  const toggleDropdown = () => setActive(!active);

  return (
    <div className={`${active ? "active" : ""} show-image stack align-center`}>
      <button
        className="show-image__icon show-image__icon--block  stack center"
        onClick={() => setActive(false)}
      >
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1.65686L16.5 16.6569M7.8075 7.96436C7.66813 8.10373 7.50268 8.21428 7.32059 8.2897C7.1385 8.36512 6.94334 8.40394 6.74625 8.40394C6.54916 8.40394 6.35399 8.36512 6.17191 8.2897C5.98982 8.21428 5.82437 8.10373 5.685 7.96436C5.54563 7.82499 5.43508 7.65954 5.35966 7.47745C5.28424 7.29537 5.24542 7.1002 5.24542 6.90311C5.24542 6.70602 5.28424 6.51086 5.35966 6.32877C5.43508 6.14668 5.54563 5.98123 5.685 5.84186M10.125 10.2819L4.5 15.9069M13.5 9.15686L15.75 11.4069"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.6925 2.84936C2.41081 3.12937 2.25167 3.50968 2.25 3.90686V14.4069C2.25 14.8047 2.40804 15.1862 2.68934 15.4675C2.97064 15.7488 3.35218 15.9069 3.75 15.9069H14.25C14.6625 15.9069 15.039 15.7419 15.3075 15.4644M15.75 11.4069V3.90686C15.75 3.50904 15.592 3.1275 15.3107 2.8462C15.0294 2.5649 14.6478 2.40686 14.25 2.40686H6.75"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="show-image__toggle" onClick={toggleDropdown}>
        <span className="show-image__toggle-circle"></span>
      </button>
      <button
        className="show-image__icon show-image__icon--show stack center"
        onClick={() => setActive(true)}
      >
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.25 2.40686H3.75C2.92157 2.40686 2.25 3.07843 2.25 3.90686V14.4069C2.25 15.2353 2.92157 15.9069 3.75 15.9069H14.25C15.0784 15.9069 15.75 15.2353 15.75 14.4069V3.90686C15.75 3.07843 15.0784 2.40686 14.25 2.40686Z"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 8.40686C7.57843 8.40686 8.25 7.73529 8.25 6.90686C8.25 6.07843 7.57843 5.40686 6.75 5.40686C5.92157 5.40686 5.25 6.07843 5.25 6.90686C5.25 7.73529 5.92157 8.40686 6.75 8.40686Z"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.75 11.4068L13.4355 9.09235C13.1542 8.81114 12.7727 8.65317 12.375 8.65317C11.9773 8.65317 11.5958 8.81114 11.3145 9.09235L4.5 15.9068"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
