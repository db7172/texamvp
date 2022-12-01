import React, { useEffect, useState } from "react";
import "./homeCover.css";
import firebase from "../../firebase";
import Success from "../Cards/Success/Success";
import { toast } from "react-toastify";

const HomeCover = () => {
  const [details, setDetails] = useState({
    heading1: "",
    heading2: "",
    line1: "",
    line2: "",
    line3: "",
  });
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async () => {
    if(details.heading1 || details.heading2 || details.line1 ||  details.line2 ||  details.line3) {
        firebase
        .firestore()
        .collection("admin")
        .doc("hero")
        .set(details)
        .then(() => {
            setSuccess(true);
        });
    } else {
        toast.error("fill the detail");
    }
  };

  useEffect(() => {
        firebase
        .firestore()
        .collection("admin")
        .doc("hero")
        .get()
        .then((doc) => {
            setDetails(doc.data());
        });
  }, []);

  return (
    <div className="home-cover">
      {success ? (
        <Success
          close={() => {
            setSuccess(false);
          }}
        />
      ) : null}
      <div className="card-title">
        <h3>Cover Section</h3>
      </div>
      <div className="input-holder">
        <div className="input-grp">
          <label htmlFor="heading1">Heading 1</label>
          <input
            type="text"
            id="heading1"
            name="heading1"
            defaultValue={details.heading1}
            className="form_inputs"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="heading2">Heading 2</label>
          <input
            type="text"
            name="heading2"
            className="form_inputs"
            id="heading2"
            defaultValue={details.heading2}
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="line1">Line 1</label>
          <input
            type="text"
            name="line1"
            className="form_inputs"
            id="line1"
            defaultValue={details.line1}
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="line2">Line 2</label>
          <input
            type="text"
            name="line2"
            className="form_inputs"
            id="line2"
            defaultValue={details.line2}
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <label htmlFor="line3">Line 3</label>
          <input
            type="text"
            name="line3"
            className="form_inputs"
            id="line3"
            defaultValue={details.line3}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="action-box">
        <button className="btn btn-submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-reset" onClick={resetFunc}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default HomeCover;
