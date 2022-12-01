import React, { useState } from "react";
import "./createCategory.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const CreateCategory = () => {
  const [details, setDetails] = useState({
    name: "",
    type: "activity",
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const resetFunc = () => {
    setDetails({
      name: "",
      type: "",
    });
    document.getElementById("categoryTitle").value = "";
    document.getElementById("type").value = "";
  };

  const onSubmit = (event) => {
    event.preventDefault()
    firebase
      .firestore()
      .collection("categories")
      .doc(details.name.charAt(0).toLowerCase() + details.name.slice(1))
      .set(details)
      .then(() => {
        toast.success("Successfull");
        resetFunc();
      });
    
  };

  return (
    <div className="create-category">
      <div className="card-title">
        <h3>Create Category</h3>
      </div>
      <form onSubmit={onSubmit}>
      <div className="input-holder cc">
        <div className="input-grp">
          <label htmlFor="categoryTitle">Category Title</label>
          <input
            type="text"
            id="categoryTitle"
            name="name"
            className="form_inputs"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="input-grp ccg">
          <label htmlFor="type">Choose Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="activity">Activity</option>
            <option value="event">Event</option>
            <option value="retreat">Retreat</option>
            <option value="workation">Workation</option>
            <option value="destination">Destination</option>
          </select>
        </div>
      </div>
      <div className="action-box">
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
        <button className="btn btn-reset" onClick={resetFunc}>
          Reset
        </button>
      </div>
      </form>
    </div>
  );
};

export default CreateCategory;
