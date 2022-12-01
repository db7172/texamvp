import React, {useState, useEffect} from "react";
import "./homeDescriptions.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const HomeDescriptions = () => {
  const [details, setDetails] = useState({
    DestinationDesc: "",
    PopularActivities: "",
    ActivityOfTheMonth: "",
    EventsDesc: "",
    PopularEvents: "",
    MusicDesc: "",
    PopularRetreat: "",
    PopularWorkation: "",
  });

  useEffect(() => {
    firebase
    .firestore()
    .collection("admin")
    .doc("heroDescription")
    .get()
    .then((doc) => {
        if (doc.data()) {
        setDetails(doc.data());
        }
    });
}, []);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const resetFunc = () => {
    setDetails({
        DestinationDesc: "",
        PopularActivities: "",
        ActivityOfTheMonth: "",
        EventsDesc: "",
        PopularEvents: "",
        MusicDesc: "",
        PopularRetreat: "",
        PopularWorkation: "",
    });
    document.getElementById("DestinationDesc").value = "";
    document.getElementById("PopularActivities").value = "";
    document.getElementById("ActivityOfTheMonth").value = "";
    document.getElementById("EventsDesc").value = "";
    document.getElementById("PopularEvents").value = "";
    document.getElementById("MusicDesc").value = "";
    document.getElementById("PopularRetreat").value = "";
    document.getElementById("PopularWorkation").value = "";
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if( details.DestinationDesc ||
        details.PopularActivities ||
        details.ActivityOfTheMonth ||
        details.EventsDesc ||
        details.PopularEvents ||
        details.MusicDesc ||
        details.PopularRetreat ||
        details.PopularWorkation ) {
        firebase
        .firestore()
        .collection("admin")
        .doc("heroDescription")
        .set(details)
        .then(() => {
          toast.success("Successfull");
          resetFunc();
        });
    } else {
        toast.error("fill the detail");
    }
  }
  return (
    <div className="home-descriptions">
      <div className="card-title">
        <h3>Landing Page Descriptions</h3>
      </div>
      <div className="input-holder">
        <div className="input-grp">
          <label htmlFor="DestinationDesc">Destination Desc</label>
          <input
            type="text"
            id="DestinationDesc"
            name="DestinationDesc"
            className="form_inputs"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="PopularActivities">Popular Activities</label>
          <input
            type="text"
            name="PopularActivities"
            className="form_inputs"
            id="PopularActivities"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="ActivityOfTheMonth">Activity of the month</label>
          <input
            type="text"
            name="ActivityOfTheMonth"
            className="form_inputs"
            id="ActivityOfTheMonth"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="EventsDesc">Events Desc</label>
          <input
            type="text"
            name="EventsDesc"
            className="form_inputs"
            id="EventsDesc"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <label htmlFor="PopularEvents">Popular events</label>
          <input
            type="text"
            name="PopularEvents"
            className="form_inputs"
            id="PopularEvents"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <label htmlFor="MusicDesc">Music Desc</label>
          <input
            type="text"
            name="MusicDesc"
            className="form_inputs"
            id="MusicDesc"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <label htmlFor="PopularRetreat">Popular retreat</label>
          <input
            type="text"
            name="PopularRetreat"
            className="form_inputs"
            id="PopularRetreat"
            onChange={handleChange}
          />
        </div>
        <div className="input-grp" style={{ marginTop: "20px" }}>
          <label htmlFor="PopularWorkation">Popular workation</label>
          <input
            type="text"
            name="PopularWorkation"
            className="form_inputs"
            id="PopularWorkation"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="action-box">
        <button className="btn btn-submit" onClick={onSubmit}>Submit</button>
        <button className="btn btn-reset" onClick={resetFunc}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default HomeDescriptions;
