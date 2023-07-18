type Props = {
  maximizefunction: () => void;
};

export const MaximizeButton = (props: Props) => {
  return (
    <div
      id="maximize-button"
      className="control-buttons"
      onClick={props.maximizefunction}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 3V13H13V3H3ZM12 12H4V4H12V12Z" fill="#C5C5C5" />
      </svg>
    </div>
  );
};
