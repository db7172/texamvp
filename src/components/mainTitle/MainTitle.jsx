import React, { useEffect, useState } from "react";
import firebase from "../../firebase";

function MainTitle() {
  const [data, setData] = useState({});
  useEffect(() => {
    firebase
      .firestore()
      .collection("admin")
      .doc("hero")
      .get()
      .then((doc) => {
        setData(doc.data());
      });
  }, []);

  return (
    <div className="tw-text-center tw-max-w-4xl tw-mx-auto">
      <p className="tw-subtitle-main tw-mb-0">{data.heading1}</p>
      <h3 className="tw-title-main tw-mb-2">{data.heading2}</h3>

      <p className="md:tw-text-lg tw-text-base tw-font-normal tw-text-secondary-color tw-tracking-wide tw-font-lato">
        {data.line1}
        <br />
        {data.line2}
        <br /> {data.line3}
      </p>
    </div>
  );
}

export default MainTitle;
