import React, { useState } from "react";
import "./homeCover.css";

const HomeCover = () => {
  const [details, setDetails] = useState({
    heading1: "",
    heading2: "",
    line1: "",
    line2: "",
    line3: "",
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const resetFunc = () => {
    setDetails({
      heading1: "",
      heading2: "",
      line1: "",
      line2: "",
      line3: "",
    });
    document.getElementById("heading1").value = "";
    document.getElementById("heading2").value = "";
    document.getElementById("line1").value = "";
    document.getElementById("line2").value = "";
    document.getElementById("line3").value = "";
  };

  console.log(details);

  return (
    <div className="home-cover">
      <div className="card-title">
        <h3>Cover Section</h3>
      </div>
      <div className="input-holder">
        <div className="input-grp">
          <lable for="heading1">Heading 1</lable>
          <input
            type="text"
            id="heading1"
            name="heading1"
            className="form_inputs"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <lable for="heading2">Heading 2</lable>
          <input
            type="text"
            name="heading2"
            className="form_inputs"
            id="heading2"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <lable for="line1">Line 1</lable>
          <input
            type="text"
            name="line1"
            className="form_inputs"
            id="line1"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <lable for="line2">Line 2</lable>
          <input
            type="text"
            name="line2"
            className="form_inputs"
            id="line2"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <lable for="line3">Line 3</lable>
          <input
            type="text"
            name="line3"
            className="form_inputs"
            id="line3"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="action-box">
        <button className="btn btn-submit">Submit</button>
        <button className="btn btn-reset" onClick={resetFunc}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default HomeCover;
