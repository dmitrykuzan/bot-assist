import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const ChatOption = () => {
  const t = useTranslation();

  return (
    <div className="chat-options stack column">
      <div className="chat-options__wrapper stack">
        <span className="chat-options__line"></span>
        <div className="chat-options__buttons stack">
          <button className="chat-options__button stack center">
            <span className="icon stack center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 4H4.5C3.96957 4 3.46086 4.21071 3.08579 4.58579C2.71071 4.96086 2.5 5.46957 2.5 6V20C2.5 20.5304 2.71071 21.0391 3.08579 21.4142C3.46086 21.7893 3.96957 22 4.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 2.50001C19.3978 2.10219 19.9374 1.87869 20.5 1.87869C21.0626 1.87869 21.6022 2.10219 22 2.50001C22.3978 2.89784 22.6213 3.4374 22.6213 4.00001C22.6213 4.56262 22.3978 5.10219 22 5.50001L12.5 15L8.5 16L9.5 12L19 2.50001Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <Typography tag="span" className="text">
              {t.actions.newChat}
            </Typography>
          </button>
          <span className="chat-options__separator"></span>
          <button className="chat-options__button stack center">
            <span className="icon stack center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9C6.39782 9 6.77936 8.84196 7.06066 8.56066C7.34196 8.27936 7.5 7.89782 7.5 7.5V6H6M10.5 9C10.8978 9 11.2794 8.84196 11.5607 8.56066C11.842 8.27936 12 7.89782 12 7.5V6H10.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <Typography tag="span" className="text">
              {t.actions.feedback}
            </Typography>
          </button>
          <span className="chat-options__separator"></span>
          <button className="chat-options__button stack center">
            <span className="icon stack center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H5H21"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 11V17"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11V17"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <Typography tag="span" className="text">
              {t.actions.deleteThisChat}
            </Typography>
          </button>
        </div>
      </div>
      <Typography className="chat-options__description">
        {t.common.b24helper}
      </Typography>
    </div>
  );
};
