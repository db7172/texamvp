import React from "react";
import "./homeDescriptions.css";
import { useState } from "react";

const HomeDescriptions = () => {
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
    <div className="home-descriptions">
      <div className="card-title">
        <h3>Landing Page Descriptions</h3>
      </div>
      <div className="input-holder">
        <div className="input-grp">
          <lable for="heading1">Destination Desc</lable>
          <input
            type="text"
            id="heading1"
            name="heading1"
            className="form_inputs"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <lable for="line1">Popular Activities</lable>
          <input
            type="text"
            name="line1"
            className="form_inputs"
            id="line1"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <lable for="line2">Activity of the month</lable>
          <input
            type="text"
            name="line2"
            className="form_inputs"
            id="line2"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <lable for="line3">Events Desc</lable>
          <input
            type="text"
            name="line3"
            className="form_inputs"
            id="line3"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <lable for="line3">Popular events</lable>
          <input
            type="text"
            name="line3"
            className="form_inputs"
            id="line3"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <lable for="line3">Music Desc</lable>
          <input
            type="text"
            name="line3"
            className="form_inputs"
            id="line3"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <lable for="line3">Popular retreat</lable>
          <input
            type="text"
            name="line3"
            className="form_inputs"
            id="line3"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <lable for="line3">Popular workation</lable>
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

export default HomeDescriptions;
