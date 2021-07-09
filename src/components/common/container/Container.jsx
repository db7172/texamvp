import React from "react";

function Container({ className = "", children }) {
  return (
    <div className={`tw-container tw-mx-auto tw-px-2 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
