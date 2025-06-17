import React from "react";

type Props = {};

const IntegrationIcon = (props: Props) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M15.48 2H7.53001C4.07001 2 2.01001 4.05999 2.01001 7.51999V15.47C2.01001 18.93 4.08001 20.99 7.53001 20.99H15.48C18.94 20.99 21 18.93 21 15.47V7.51999C21 4.05999 18.93 2 15.48 2Z"
          fill="white"
        />
        <path
          d="M21.96 18.84L20.33 19.39C19.88 19.54 19.52 19.89 19.37 20.35L18.82 21.98C18.35 23.39 16.37 23.36 15.93 21.95L14.08 16C13.72 14.82 14.81 13.72 15.98 14.09L21.94 15.94C23.34 16.38 23.36 18.37 21.96 18.84Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default IntegrationIcon;
