import React from "react";

function Container({ className = "", children }) {
  return (
    <div
      className={`tw-container tw-max-w-6xl tw-mx-auto tw-px-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
