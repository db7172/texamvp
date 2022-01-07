import React, { useState } from "react";
import "./activityPage.css";

const ActivityPage = () => {
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

  return (
    <div className="activity-page">
      <div className="home-cover">
        <div className="card-title">
          <h3>Activity Section</h3>
        </div>
        <div className="input-holder">
          <div className="input-grp">
            <lable for="startPrice">Starting From (Price)</lable>
            <input
              type="text"
              id="startPrice"
              name="startPrice"
              className="form_inputs"
              onChange={handleChange}
            />
          </div>
          <div className="input-grp">
            <lable for="heading2">Activity About</lable>
            <input
              type="text"
              name="activityAbout"
              className="form_inputs"
              id="activityAbout"
              onChange={handleChange}
            />
          </div>
          <div className="input-grp">
            <lable for="heading2">Activity About</lable>
            <input
              type="text"
              name="activityAbout"
              className="form_inputs"
              id="activityAbout"
              onChange={handleChange}
            />
          </div>
          <div className="input-grp">
            <lable for="heading2">Activity About</lable>
            <input
              type="text"
              name="activityAbout"
              className="form_inputs"
              id="activityAbout"
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
    </div>
  );
};

export default ActivityPage;
