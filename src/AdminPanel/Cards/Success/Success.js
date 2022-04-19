import React from "react";
import "./success.css";

const Success = ({ close }) => {
  return (
    <div className="success-card">
      <p>Data written successfully !</p>
      <p>Lorem Ipsum is simply dummy text of the printing and type setting </p>
      <div className="action-box">
        <button onClick={close}>Okay</button>
      </div>
    </div>
  );
};

export default Success;
