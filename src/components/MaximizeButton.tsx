type Props = {
  maximizefunction: () => void;
  isMaximize: boolean;
};

export const MaximizeButton = (props: Props) => {
  return (
    <div
      id="maximize-button"
      className="control-buttons"
      onClick={props.maximizefunction}
    >
      {props.isMaximize ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5V14H12V5H3ZM11 13H4V6H11V13Z" fill="#C5C5C5" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 5H6V4H13V11H12V12H14V5V3H12H5V5Z"
            fill="#C5C5C5"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 3V13H13V3H3ZM12 12H4V4H12V12Z" fill="#C5C5C5" />
        </svg>
      )}
    </div>
  );
};
