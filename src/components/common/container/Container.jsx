import React from "react";

function Container({ className = "", children }) {
  return (
    <div className={`tw-container tw-mx-auto xl:tw-px-6 tw-px-4 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
